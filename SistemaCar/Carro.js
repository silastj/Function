import { Automovel } from './Automovel.js';

export class Carro extends Automovel{
    constructor(marca, modelo, ano, preco, portas){
        super(marca,modelo,ano,preco)

        this._portas = portas;
    }
}