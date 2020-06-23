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