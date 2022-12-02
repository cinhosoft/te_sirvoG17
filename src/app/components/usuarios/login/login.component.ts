import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public titulo:string;
  public usuario:Usuario;
  constructor(private _route:ActivatedRoute,
    private _router:Router,
    private _usuarioService:UsuarioService
    ) { 
      this.titulo="Iniciar Sesión";
      this.usuario = new Usuario('','','','','','',null);
    }

  ngOnInit(): void {
    if (this._usuarioService.esAutenticado()){
      this._router.navigate(['home']);
    }else{
      this._router.navigate(['login']);
    }
  }
  onLogin():void{
    if(this.usuario.username=="" || this.usuario.password==""){
      Swal.fire("Error!","No Digito los datos completos",'error')
    }else{
      this._usuarioService.login(this.usuario.username, this.usuario.password).subscribe({
        next:(response)=>{
          this._usuarioService.guardarToken(response.token);
          this._usuarioService.guardarUsuario(response.idUsuario,response.nombreUsuario)
          this._router.navigate(['home']);
          Swal.fire('Login!','Hola: ' + response.nombreUsuario  + ', ha iniciado correctemente','success');
        },
        error:(error)=>{
          if(error.status==403){
            Swal.fire('Error Login!',"Datos Digitados Incorrectos",'error');
          }else{
            Swal.fire('Error Login!',"Error no controlado por el sistema "+ error.status,'error');
          }
        }
      });
    }
  }
    

}
