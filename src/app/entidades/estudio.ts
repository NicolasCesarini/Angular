export class Estudio {
    //atributos
    id?: number;
    imgCurso: string;
    tituloCurso: string;
    anio: string;

    //constructor con parámetros
    constructor(imgCurso: string, tituloCurso: string, anio: string){
        this.imgCurso = imgCurso;
        this.tituloCurso = tituloCurso;
        this.anio = anio;
    } 
}
