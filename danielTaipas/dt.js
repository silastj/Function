class Aluno {
    constructor(nome){
        this.nome = nome
        this._faltas = 0;
    }

    adicionarFaltas(){
        this._faltas += 1;
        console.log(`adicionado ${this._faltas} falta para o ${this.nome}`)        
    }
}
let silas = new Aluno('Silas')
console.log(silas)
console.log(silas.adicionarFaltas())



class ListaAlunos{
    constructor(_lista){
        this._lista = [].concat(_lista);
    }

    obterAluno(nome){
        return this._lista.filter(aluno => aluno.nome === nome)[0];
    }

    obterAlunosReprovadosPorFaltas(){
        var faltasPermitidas = ListaAlunos.faltasPermitidas;
            return this._lista.filter(aluno => {
                return aluno._faltas >= faltasPermitidas
                
            });

    }

    static get faltasPermitidas(){
        return 5;
    }
}


var alunos = ['Daniel', 'Mara', 'Jose'].map(aluno => new Aluno(aluno));

console.log(alunos);

var listaAlunos = new ListaAlunos(alunos);

listaAlunos.lista[0S]._faltas = 6;
listaAlunos.lista[2]._faltas = 8;
console.log(listaAlunos)
console.log(listaAlunos.obterAlunosReprovadosPorFaltas())


// const input = document.querySelector('input').value;
// console.log(input)
// const button = document.querySelector('button');
// button.addEventListener('click', adicionarFaltas());
