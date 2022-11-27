import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UsuarioService } from '../../../services/usuario.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  public usuario:any = {};
  public url_files: String
  constructor(private activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService) {
      this.url_files = GLOBAL.url_files;
    }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      console.log(params)
      if(id){
        this._usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }
    })
  }

}
