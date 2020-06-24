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