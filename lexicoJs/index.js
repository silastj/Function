// 'use strict'
//O use strict, Ele deixa o JS mais seguro
//não deixa declara o x sem a a variavel o let ou const 
// x = 10
//temos outras confusões que tinha no javascript

let x = 10
console.log(x)

function janela(){
    console.log(this)
}
janela()

const obj = {
    nome:'Silas',
    janela
}

obj.janela()
