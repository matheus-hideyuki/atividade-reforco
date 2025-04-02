import {MaterialLeitura} from "./MaterialLeitura";
import {Livro} from "./Livro";
import {Revista} from "./Revista";
import { Artigo } from "./Artigo";

console.log("teste")

const livro = new Livro("cronicas de narnia", "eu", 250)
livro.exibirDetalhe();
const revista = new Revista("VEJA", "sla", 350)
revista.exibirDetalhe();
const artigo = new Artigo("artigo", "sla", new Date)
artigo.exibirDetalhe();