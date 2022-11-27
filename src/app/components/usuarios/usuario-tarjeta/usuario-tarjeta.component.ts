import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';  
import { GLOBAL } from '../../../services/global';
@Component({
  selector: 'app-usuario-tarjeta',
  templateUrl: './usuario-tarjeta.component.html',
  styles: [
  ]
})
export class UsuarioTarjetaComponent implements OnInit {
  @Input() usuario: any = {};//Recibir Datos de un Componente
  @Input() index: number | undefined;
  @Output() usuarioSeleccionado: EventEmitter<number>;//Enviar Datos a Otro Componente
  public url_files: String;

  constructor(private router: Router) { 
    this.url_files = GLOBAL.url_files;
    this.usuarioSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  
  verUsuario() {
    // console.log(  this.index );
    this.router.navigate( ['/usuario', this.usuario.username] );
    // this.usuarioSeleccionado.emit( this.index );
  }

} 
