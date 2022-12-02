import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _token: string|null=null;
  private _username: string|null=null;
  private _idUsuario: string|null=null;
  public url: String
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
   }
   public get idUsuario():string|null{
    if(this._idUsuario !=null){
      return this._idUsuario;
    }else if((this._idUsuario==null && sessionStorage.getItem('id')!=null)){
      this._idUsuario = sessionStorage.getItem('id');
      return this._idUsuario;
    }
    return null;
   }
   public get username():string|null{
    if(this._username !=null){
      return this._username;
    }else if((this._username==null && sessionStorage.getItem('username')!=null)){
      this._username = sessionStorage.getItem('username');
      return this._username;
    }
    return null;
   }
   public get token():string|null{
    if(this._token !=null){
      return this._token;
    }else if((this._token==null && sessionStorage.getItem('token')!=null)){
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
   }

  login(username:String, password:String):Observable<any>{
    return this._http.post<any>(this.url+'authenticate',{username:username,password:password})
  }

  logout(){
    this._token=null;
    sessionStorage.clear();
  }

  guardarToken(token:string){
    this._token = token;
    sessionStorage.setItem('token',token);
  }

  guardarUsuario(id:string,nombreUsuario:string){
    this._idUsuario = id;
    this._username = nombreUsuario;
    sessionStorage.setItem('username',id);
    sessionStorage.setItem('nombreCompleto',nombreUsuario);
  }
  obtenerDatosToken(token:string):string|null{
    if(token!=null){
     return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  }
  esAutenticado():boolean{
    if(this.token != null){
      return true;
    }else{
      return false;
    }
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
