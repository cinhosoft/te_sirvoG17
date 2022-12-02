import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  title = 'Te Sirvo APP 17 - MISIONTIC';
  public logaedo: boolean=false;

  constructor(public _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit(): void {
  }
 
  logout():void {
    this._usuarioService.logout();
    Swal.fire("Logout", "Ha Cerrado Sesion con Exito","success");
    this._router.navigate(['login'])
  }



}
