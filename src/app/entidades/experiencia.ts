export class Experiencia {
    //atributos
    id?: number;
    imgExperiencia: string;
    empresa: string;
    puesto: string;
    anio: string;
    descripcionTrabajo: string;

    //constructor con parámetros
    constructor(imgExperiencia: string, empresa: string, puesto: string, anio: string, descripcionTrabajo: string){
        this.imgExperiencia = imgExperiencia;
        this.empresa = empresa;
        this.puesto = puesto;
        this.anio = anio;
        this.descripcionTrabajo = descripcionTrabajo;
    }
}
