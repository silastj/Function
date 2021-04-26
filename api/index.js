//GET
// JWT envia como uma key

// const latitude = 48.8582;
// const longitude = 2.2945;
// const model = 'GFS_13';
// const options = {
//     method: 'GET',
//     mode: 'cors',
//     cache: 'default'
// }

// fetch(`https://api.therainery.com/forecast?latitude=${latitude}&longitude=${longitude}&model=${model}`, {
//   headers: {
//     'x-api-key': 'JqqysXDI8qGZExhvAojUT4eJQ14Aij3664ACk360'
//   }
// })
// .then((response) => response.json())
// .then((jsonData) => {
//   // Do something with response data.
//   console.log(jsonData)
// });


fetch(`https://dog.ceo/api/breeds/image/random`)
.then((response) => response.json())
.then((data) => {
    const imagemdog = data;
    const imgdado = document.querySelector('img').setAttribute('src', data.message)
})

// var nome = prompt('Qual é o seu nome')
// alert('Olá '+ nome)

var numero = "10"
var total = numero * 10
console.log(typeof(total))

var nn = "5"
var novo = Number(nn)
const novov = parseInt(nn)
// const novol = parseDouble(nn)

console.log(typeof(novo), typeof(novov))

const btn = document.querySelector('button')
btn.addEventListener('click', dobro)

function dobro(){
    const entradanumero = document.querySelector('#dado').value
    const nnentradanumero = Number(entradanumero)
        console.log(typeof(nnentradanumero))
    const resultado = nnentradanumero * nnentradanumero
    const placar = document.querySelector('p')
    placar.innerHTML = resultado
}

const btnnovo = document.querySelector('#novo')
btnnovo.addEventListener('click', garcon)

function garcon() {
    const entradagorjeta = Number(document.querySelector('#dado2').value)
    const resultadospan = document.querySelector('span')
    const taxa = 0.10
    console.log(taxa)
    const calculo = (entradagorjeta * taxa)
    const total = (Number(calculo.toFixed(2)) + entradagorjeta)
    console.log(typeof(total))
    resultadospan.innerHTML = 'R$: ' + total.toFixed(2)
}
const btnnovo2 = document.querySelector('#novo2')
btnnovo2.addEventListener('click', horas)

function horas(){
    const entradahoras = Number(document.querySelector('#dado3').value)
    const entradastrong = document.querySelector('strong')
    const horas = 24
    entradastrong.innerHTML = (entradahoras * horas) + 'hs'
}

function vizinhos(vizinho){
    return `Se o numero for ${vizinho} o proximo número é: ${vizinho + 1} e o número abaixo é: ${vizinho - 1}`
}
console.log(vizinhos(10))


const conta = 100
const contaTotal = conta
const nClientes = 3

function clienteValor(conta){
    const total = `${conta / nClientes}`
    return Math.round(total).toFixed(2);
}

console.log(clienteValor(100))

const valorProduto = 100
const desconto = 0.10
const parc = 3
const totalDesconto = valorProduto * desconto

function calcularAvistaPrazo(valorProduto){
    return `O valor produto do ${valorProduto} e tem um desconto de 10% sendo o total ${valorProduto - (valorProduto * desconto)} e ainda parcelamos em 3x ${(valorProduto / parc).toFixed(2)}`
}
console.log(calcularAvistaPrazo(100))

const notaA =  5
const notaB = 10
const qnotas = 2
function Media(notaA, notaB){
    return ((notaA + notaB) / qnotas )
}
console.log(Media(10,10));

function clicou(){
   const clicou = document.querySelector('.clicou')
   clicou.textContent = 'novo'
}

function mostraNome(){
    const nomeNovo = document.querySelector('#nome').value
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `Olá: ${nomeNovo}`
}
const mostranome = document.querySelector('#mostranome')
mostranome.addEventListener('click', mostraNome)


console.log(Math.random().toFixed(3) * 10)


const LresTitle = document.querySelector('.resTitle')
const LresHorasMinutos = document.querySelector('.resHora')
function converteHM(){
    const lInput = document.querySelector('#Ltext').value
    const LInputN = document.querySelector('#Lnumber')
    const LInputNovo = Number(LInputN.value)
    const resHoras = Math.floor(LInputNovo / 60)
    const resMinutos = LInputNovo % 60
    LresTitle.innerHTML = `${lInput}`
    if(LInputNovo == null){
        alert('Digite um valor')
    }else {
        LresHorasMinutos.innerHTML = `${resHoras} horas e ${resMinutos} minutos.`
        localStorage.setItem('filme', lInput )
        localStorage.setItem('horas', resHoras )
        localStorage.setItem('minutos', resMinutos )
    }
}

const Lbutton = document.querySelector('.Lbutton')
Lbutton.addEventListener('click', converteHM)



const fres = document.querySelector('.FresResultado')
const calcularFarmacia = () => {
    const finput = document.querySelector('#Finput').value
    const finputv = document.querySelector("#FinputV").value
    // const regex = "(\b[0-9]\b)/g"
    finputvv = Number(Math.floor(finputv).toFixed(2))


    fres.innerHTML = `Promoção de ${finput}, Leve 2 por apenas ${finputvv}`

}

const fbutton = document.querySelector('#Fbutton')
fbutton.addEventListener('click', calcularFarmacia)

//CALLBACKS
//São funções de retorno

function funcaoCallback(cb){
    console.log('novinho')
        cb(20)
}
funcaoCallback(function(){
    console.log('cb')
})
const funcaoConst  = (param) => {
    console.log('parametro')
    console.log(param)
}
funcaoCallback(funcaoConst)

//Catching children
//html>body>aside
const aside = document.querySelector('#aside').parentElement// ou parentNode
console.log(aside)

const primeiroChild = document.querySelector('aside').firstElementChild
console.log(primeiroChild)

const title = document.getElementById('aside').innerHTML = 'mudou no script externo'
console.log(title)

const para = document.getElementsByClassName('paragrafo')
console.log(para[0], para[1])

const paraAll = document.querySelectorAll('.paragrafo')
console.log(paraAll.length)

function bv(){
    const user = ' Silas'
    const bv = document.querySelector('.bv')
    const bvValor = document.createElement('span')
    // bv.textContent += user PODEMOS RESCREVER O TEXTCONTENT
    bvValor.textContent = user // PODEMOS CRIAR A TAG
    console.log(bvValor)
    bv.appendChild(bvValor)
}
bv()

//INSERTBEFORE
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const oneNovo = document.createElement('div')
const oneFilho = document.createElement('p')
oneFilho.innerText = 'oneFilho'
oneNovo.appendChild(oneFilho)
console.log(oneNovo)


one.insertBefore(oneNovo, two.firstElementChild)

//PROPRIEDADE OU PROPS
/* 
disabled
*/

const contratoCheckbox = document.querySelector('#contrato')
const enviar = document.querySelector('.enviar')
console.log(enviar)
contratoCheckbox.addEventListener('click', inputDisabled)

function inputDisabled(){
    console.log(enviar)
    // enviar.disabled =true ? enviar.disabled = false : enviar.disabled = true
    (contratoCheckbox.className === 'teste')? contratoCheckbox.classList.remove('teste') :contratoCheckbox.classList.add('teste')

}
