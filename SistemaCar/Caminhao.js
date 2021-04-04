import { Automovel } from './Automovel.js';

export class Caminhao extends Automovel{
    constructor(marca,modelo,ano,preco){
        super(marca,modelo,ano,preco)

        this._tamanho = tamanho;
        this._tipo = tipo;
    }
}