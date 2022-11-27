import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  usuarios:Usuario[] = [];
  constructor(private _usuarioService:UsuarioService,
    private router:Router) { }

  ngOnInit(): void {
    this._usuarioService.listasUsuarios().subscribe(data => (this.usuarios=data));
  }
  verUsuario( idx:number ){
    this.router.navigate( ['../usuario',idx] );  
  }

}
