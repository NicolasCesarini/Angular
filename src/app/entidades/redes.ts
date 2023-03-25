export class Redes {
    //atributos
    id?: number;
    red: string;
    link: string;
    color: string;

    //constructor con parámetros
    constructor(red: string, link: string, color: string){
        this.red = red;
        this.link = link;
        this.color = color;
    }
}
