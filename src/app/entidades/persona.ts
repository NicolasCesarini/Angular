export class Persona {
    //atributos
    id?: number;
    nombre: string;
    apellido: string;
    edad: string;
    imgPerfil: string;
    linkCV: string;
    email: string;
    clave: string;
    acercaDe: string;

    //constructor con parámetros
    constructor(nombre: string, apellido: string, edad: string, imgPerfil: string, linkCV: string,
        email: string, clave: string, acercaDe: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.imgPerfil = imgPerfil;
        this.linkCV = linkCV;
        this.email = email;
        this.clave = clave;
        this.acercaDe = acercaDe;
    }
}
