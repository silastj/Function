//ES5
function ContaP(cliente, numero){
    this.cliente = cliente;
    this.numero = numero;
}

//ES6
class ContaC{
    constructor(cliente,numero){
        this.cliente = cliente;
        this.numero = numero;
    }
}


class Conta {
    nome = _nome;
    cpf = _cpf;
    rg = _rg;
}



Conta.nome = 'Silas'
console.log(Conta)
console.log(ContaP)
console.log(ContaC)




