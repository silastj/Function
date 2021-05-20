//Number

//ToFixed - Deixa apenas com duas casas após a virgula
const numero = 123456789.12345
const texto = '20010a'
console.log('toFixed : '+numero.toFixed(2))

//toPrecision - 
console.log('toPrecision: '+numero.toPrecision(8));

//toExponential
console.log('toExponential: '+numero.toExponential(4));

//toString  Converte ele em string
console.log(numero.toString())

//toLocaleString()
console.log(numero.toLocaleString());
console.log(numero.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}));

//IsNan is note a number, isso não é um número
console.log(isNaN(texto));
console.log((parseFloat(texto))) // retira a letra




