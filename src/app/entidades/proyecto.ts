export class Proyecto {
    //atributos
    id?: number;
    imgProyecto: string;
    institucion: string;
    nombreProyecto: string;
    anio: string;
    descripcionProyecto: string;
    linkProyecto: string;


    //constructor con parámetros
    constructor(imgProyecto: string, institucion: string, nombreProyecto: string, anio: string,
        descripcionProyecto: string, linkProyecto: string){
        this.imgProyecto = imgProyecto;
        this.institucion = institucion;
        this.nombreProyecto = nombreProyecto;
        this.anio = anio;
        this.descripcionProyecto = descripcionProyecto;
        this.linkProyecto = linkProyecto


    } 
}
