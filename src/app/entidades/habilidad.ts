export class Habilidad {
    //atributos
    id?: number;
    nombre: string;
    porcentaje: string;

    //constructor con parámetros
    constructor(nombre: string, porcentaje: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }
}
