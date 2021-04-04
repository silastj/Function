import { Automovel } from './Automovel.js';

export class Onibus extends Automovel {
    constructor(marca, modelo, ano, preco, cor, lugares, tranferencia){
        super(marca, modelo, ano , preco, cor)

        this._lugares = lugares;
        this._tranferencia = tranferencia;
        this.preco = preco;
    }

}