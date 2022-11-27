import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../../services/usuario.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  public usuarios:Usuario[]=[];

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    //if(!this._usuarioService.esAutenticado()){
    //  this._router.navigate(['login']);
    //}else{
      this._usuarioService.listasUsuarios().subscribe(data => (this.usuarios=data));
    //}
  }

  eliminar(usuario: Usuario): void {
     
    swal.fire({
      title: 'Está seguro?',
      text:`¿Seguro que desea eliminar al cliente ${usuario.nombreCompleto} ?`,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      //icon: 'warning',
      reverseButtons: true
    }).then((result:any) => {
      if (result.value) { 
        this._usuarioService.delete(usuario.username).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(cli => cli !== usuario)
            swal.fire(
              'Cliente Eliminado!',
              `Cliente ${usuario.nombreCompleto} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
