export class Estudio {
    //atributos
    id?: number;
    imgCurso: string;
    institucion: string;
    tituloCurso: string;
    anio: string;
    descripcionEducacion: string;

    //constructor con parámetros
    constructor(imgCurso: string, institucion: string, tituloCurso: string, anio: string,
        descripcionEducacion: string){
        this.imgCurso = imgCurso;
        this.institucion = institucion;
        this.tituloCurso = tituloCurso;
        this.anio = anio;
        this.descripcionEducacion = descripcionEducacion;
    } 
}
