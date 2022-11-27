import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styles: [
  ]
})
export class UsuarioFormComponent implements OnInit {

  public usuario:Usuario = new Usuario('','','','','','',null);
  public titulo:string="Crear Usuario";
  public mensaje:string="";
  public files:any;
  message="";
  fileName="";
  clave_encriptada="";
  fileInfos:Observable<any> | undefined;

  constructor(
    private usuarioService:UsuarioService,
    private uploadFilesService:UploadFilesService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log(params)
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
        this.clave_encriptada = this.usuario.password;
      }
    })
  }
  selectFiles(event:any){
    event.target.files.length==1 ? this.fileName=event.target.files[0].name:this.fileName=event.target.files.length + "archivos";
    this.files = event.target.files
  }
  uploadFiles(){
    this.message="";
    this.upload(0,this.files[0]);
   }

   upload(index:number, file:any) {
    //this.progressInfo[index] = { value: 0, fileName: file.name };

    this.uploadFilesService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          //this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.usuario.urlFoto=this.fileName;
          this.fileInfos = this.uploadFilesService.getFiles();
          this.fileInfos.subscribe({
            next: (data) => {
              if(data){
                console.log(data)
                 }
              }
          });
        }
      },
      err => {
        //this.progressInfo[index].value = 0;
        this.message = 'No se puede subir el archivo ' + file.name;
      });
  }
  create(formRegister:any):void{
    console.log(this.usuario);
    this.usuarioService.register(this.usuario).subscribe({
   next: (data) => {
    if(data){
      console.log(data)
      this.mensaje ="El Registro se ha realizado correctametne...";
      this.usuario = new Usuario('','','','','','',null);
      swal.fire("Usuario Registrado",this.mensaje,'success');
      formRegister.reset();
      this.router.navigate(['../usuarios'])
     }else{
      this.mensaje = "Error al Registrar Usuario";
     }
   },
   error: (error)=>{
    console.log(<any>error);
   },
   complete: ()=>{console.info('Proceso Terminado')}
   });
   }

   update():void{
    this.usuarioService.update(this.usuario).subscribe( usuario => {
      this.router.navigate(['../usuarios'])
      swal.fire('Usuario Actualizado', `Usuario ${usuario.nombreCompleto} actualizado con éxito!`, 'success')
    }
    )
  }

}
