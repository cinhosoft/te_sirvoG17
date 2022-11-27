import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private _token: string;
  //private _username: string;
  //private _idUsuario: string;
  public url: String
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
   }
  //create
  register(user:Usuario):Observable<Usuario>{
    return this._http.post<Usuario>(this.url+'register',user,{headers:this.httpHeaders})
   }
  //read all
  listasUsuarios():Observable<any>{
    return this._http.get<any>(this.url+'user', {headers:this.httpHeaders});//GET->http://localhost:9011/user
   }
  //read one
  getUsuario(id:String):Observable<Usuario>{
    return this._http.get<Usuario>(`${this.url}user/${id}`, {headers:this.httpHeaders})
    //return this._http.get<any>(this.url+'user/'+id)
  }
  //update
  update(usuario: Usuario):Observable<Usuario>{
    return this._http.put<Usuario>(`${this.url}user/${usuario.username}`, usuario, {headers: this.httpHeaders})
  }
  //delete
  delete(id:String):Observable<Usuario> {
    return this._http.delete<Usuario>(this.url+'user/'+`${id}`, {headers:  this.httpHeaders});
   }
}
