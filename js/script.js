//METODOS E FUNÇÕES SÃO IGUAIS
//VAR E PROPRIEDADES
// VAR ESTÁ FORA DO OBJETO
//PROPRIEDADES ESTÁD DENTRO DO OBJETO

//LITERAL
function somar(n1, n2){
    return n1 + n2;
}

var soma = somar(10,20)
    console.log('RES: ' + parseInt(soma));
console.log(typeof(soma));

//ADD PROPRIEDADE NA FUNÇÃO

somar.frase = 'Aqui está a frase';
console.log(somar.frase);

// FUNÇÃO ANOMINA
var teste = function(){
    console.log('teste');
}

teste();

//FUNÇÃO PASSADA POR PARAMETRO
var parametro = function(f){
    f();
};

parametro(function(){
    console.log('função passada por parametro');
});

//IIFE
// FUNÇÃO AUTO INVOCAVEL
(function(){

// Conteudo aqui

})()

function nova(){
    'use strict';
function somar(arr){
   
    console.log(arguments);
    var result = 0;
    var x = 0;

    while(arguments[x]){
        result += arguments[x];
        x++;
    }
    console.log('result: '+ result);

}
somar(20,20,40,40);
}
nova()

function teste(){
    'use strict';
    function calcularMedia() {
        var total = 0;
        var qtd = arguments.length;
        var x = 0;
        while(typeof arguments[x] === 'number'){
            total += arguments[x];
            x++
        };
        return total / qtd;
    }
    var media1 = calcularMedia(2,3);
    var media2 = calcularMedia(4,0,10,10);

    console.log(media1)
    console.log(media2)
};

teste();

function imc(peso, altura, callback){
    var imc = peso / (altura * altura);
    if(callback && typeof callback === 'function'){
        return callback(imc);
    }
    console.log('Não passou callback')
    return imc;


function classificarIMC(imc){
    if(imc<=16.9){
        return 'muito abaixo do peso';
    }else if(imc <= 18.4){
        return 'abaixo do peso';
    }else if(imc <= 24.9){
        return 'normal';
    }else if(imc <=29.9) {
        return 'acima do peso';
    }else if(imc <= 34.9){
        return 'obesidade 1';
    }else if(imc <= 40){
        return 'obesidade 2'
    }else if(imc <= 34.9){
        return 'obesidade 3';
    }


var peso = 65;
var altura = 1.75;

var imc = calcularIMC(peso, altura, callback);
var classificacao = classificaIMC(imc);

console.log('classificação IMC: ', classificacao);

}
}
imc()

// COLOCANDO OS VALORES DENTRO DO INPUT
var name = "Amós";
var sobreName = "Santos"

document.querySelector('#txtNome').value = name +' '+sobreName;
// SETANDO O DISABLE NO INPUT
document.querySelector('#txtNome').disabled = true;
//MUDANDO A PROPRIEDADE DO INPUT E SETANDO O READLONY ( SO LEITURA)
document.querySelector('#txtNome1').readOnly = true;


//USANDO O WHILE
var td = document.querySelectorAll('.aluno td');
console.log(td);

var x = 0;
while(td[x]){
    td[x].textContent = x + '= Alterado';
    x++;
}

// CONSTRUTOR
var hoje = new Date();
console.log(hoje);

var x = [0];
function mudaArr(x){
    // debugger
    var y = x;
    y.push(2);
    x.push(3);
    console.log('mudaX: ');
    console.log(x);
    console.log(y);
}
mudaArr(x);

function mudarCor(cor){
    console.log(this);
    this.cor = cor;
}

var caneta1 = {
    cor: 'red',
    mudarCor: mudarCor
}
var caneta2 = {
    cor: 'blue',
    mudarCor: mudarCor
}


function Carro(preco, cor){
    //PEGA A COR POR PARAMETRO OU FICA A COR DEFAULT BLUE
    //PEGA O PRECO POR PARAMETRO OU FICA O PRECO DEFAULT 10
    this.preco = preco || 10;
    this.cor = cor || 'blue',
    this.mudarPreco = function(preco){
        this.preco = preco;
    }
}

var punto = new Carro(3000, 'yellow');

//SE EU CONSULTAR O NOME PUNTO NO CONSOLE DO NAVEGADOR
// ELE TRAZ OS VALORES SETADOS ACIMA



function Notebook(preco, cor){
    var color = cor || 'black';
    this.preco = preco || 1;

    this.mudarCor = function(cor){
        if(cor !== 'red' && cor !== 'blue' && cor !== 'green'){
            return;
        }
        color = cor;
    }

    this.pegarCor = function(){
        return color;
    }
}
var dell = new Notebook(2000, 'prata');

//PRECISAR DIGITAR NO CONSOLE O DELL E SUAS PROPRIEDADES

//CRIANDO OBJETO LITERAL
var pessoa1 = {
    nome: 'Silas',
    sobrenome: 'Santos'
};
var pessoa2 = {
    nome: 'Samara',
    sobrenome: 'Dantas'
};
var pessoa3 = {
    nome: 'Kalebe',
    sobrenome: 'Dantas'
};

var pessoas = [
    pessoa1,
    pessoa2,
    pessoa3
]

console.log(pessoa1.nome +' '+pessoa1.sobrenome);
console.log(pessoa2.nome +' '+pessoa2.sobrenome);
console.log(pessoa3.nome +' '+pessoa3.sobrenome);
//  OU
console.log(pessoas);
var x = 0;
while(pessoas[x]){
    console.log(pessoas[x].nome + ' + ' + pessoas[x].sobrenome);
    x++;
}

// OU

for (var i = 1; i <= 3;i ++){
    console.log(window["pessoa"+i].nome+' - '+ window["pessoa"+i].sobrenome);
}

