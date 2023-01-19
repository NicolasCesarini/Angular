export class Experiencia {
    //atributos
    id?: number;
    imgExperiencia: string;
    puesto: string;
    anio: string;
    descripcionTrabajo: string;

    //constructor con parámetros
    constructor(imgExperiencia: string, puesto: string, anio: string, descripcionTrabajo: string){
        this.imgExperiencia = imgExperiencia;
        this.puesto = puesto;
        this.anio = anio;
        this.descripcionTrabajo = descripcionTrabajo;
    }
    
}
