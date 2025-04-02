import { MaterialLeitura } from "./MaterialLeitura"

export class Artigo implements MaterialLeitura{
    titulo: string;      
    autor: string;       
    dataPublicacao: Date;

    constructor(titulo:string, autor:string, dataPublicacao: Date){
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
    }

    exibirDetalhe(): void {
        console.log("titulo: " + this.titulo + "autor: " + this.autor + "data de publicacao: " + this.dataPublicacao);
    }

}