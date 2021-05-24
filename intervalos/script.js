//Single thread - Um processo por vez é executado

//INTERVALOS

//setTimeout - Ele planeja uma tal hora para executar uma função X
//primeiro parametro uma função e segundo parametro um tempo em millesegundos
setTimeout(()=>{
    console.log('3000')
},3000)

const nova = Date.now()
setTimeout(() => {
    console.log('2000')
const velho = Date.now()
console.log(velho - nova);
}, 2000);

let str = ''
var d = document.querySelector('div')
for(let i = 0;i < 10; i++){
    str += `i: ${i} -- `
    d.textContent += str
}

//setInterval - Ele planeja executar uma função em tempo e tempo
//Abaixo já estou usando o clearInterval, quando chegar no numero 5 ele para
let n = 0
const interval = setInterval(() => {
    console.log('numeros:',n++)
    if(n >= 5){
        clearInterval(interval)
    }
}, 1000);

//clearTimeout e clearInterval - elas limpas os intevarlos acima.


