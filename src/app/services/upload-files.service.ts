import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  public url: String
  constructor(private _http: HttpClient){
    this.url = GLOBAL.url;
  }
  //Metodo que envia los archivos al endpoint /upload 
  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('files', file);
   
    const req = new HttpRequest('POST', `${this.url}file/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this._http.request(req);
  }

  //Metodo para Obtener los archivos
  getFiles(){
    return this._http.get(`${this.url}file/files`);
  }

  //Metodo para borrar los archivos
  deleteFile(filename: string){
    return this._http.get(`${this.url}delete/${filename}`);
  }
}
