export class Usuario {
    username:            string;
    password:            string;
    nombreCompleto:      string;
    profesion:           string;
    descripcionServicio: string;
    urlFoto:             string;
    fechaCreacion:       Date | null;
    
    constructor(username:string, password:string, nombreCompleto:string, profesion:string,descripcionServicio:string, urlFoto:string, fechaCreacion:Date | null){
        this.username=username;
        this.password=password;
        this.nombreCompleto=nombreCompleto;
        this.profesion=profesion;
        this.descripcionServicio=descripcionServicio;
        this.urlFoto=urlFoto;
        this.fechaCreacion=fechaCreacion;
    }
}
