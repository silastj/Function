// Expressões que ajuda no cálculo matematico 

//Math.min - Trazer um valor minino
const numero = [1,2,3,4,5,6]
const Nminino = Math.min(...numero)
console.log(Nminino);

//Math.max - Trazer um valor máximo
console.log(Math.max(...numero))

//Math.round - Arredondar o número acima de .5 acima de .5
const arredondar = 14.5
console.log(Math.round(arredondar))

//Math.floor - Arredondar para baixo 
console.log(Math.floor(arredondar))

//Math.ceil - Arredondar para cima
console.log(Math.ceil(arredondar));

//Math.pow - Calcular o primeiro parametro ao segundo parametro ao cubo
const primeiroP = 2
const segundoP = 3
console.log(Math.pow(primeiroP,segundoP)); // ou podemos usar 
console.log(2 ** 3);

//Math.sqrt - raiz quadrada
const raiz = 49
const Nraiz = 8
console.log(Math.sqrt(raiz));

//Math.cbrt - raiz cubica
console.log(Math.cbrt(Nraiz));

//Math.random - Traz um numero aleatorio entre 0 e 1
console.log(Math.random()); // para chegar ao número 5
console.log(Math.random() * 5);

//deixar redondo
console.log(Math.floor(Math.random() * 10));

//DESAFIO
(function(){
    const acerto = +document.querySelector('input').value
    const acertoDia = Math.floor(Math.random() * 10)
    if (acerto > 10){
        return console.log('numero acima do solicitado!')
    }
    acerto === acertoDia ? console.log('acertou') : console.log('errou')
})()




