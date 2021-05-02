//every
//some()
//filter()
//forEach()
//map()

const marcaCarros = ['fiat','volks', 'Gm','Ford', 1, 2, true]
const potenciaCarros = [1,2,4]

//every e some = Ele verifica se tem algum true , assim ele retorna true(boolean) se não false

let marcas = marcaCarros.every(function(el){
    return typeof el === 'number'
})
let marcasPotencia = potenciaCarros.some(function(el){
    return typeof el === 'number'
})
console.log('Marcas: ' + marcas);
console.log('Potencia Marcas: ' + marcasPotencia);

//filter = Ele não retorna uma nova array
marcaCarros.filter((elemento,index, arrayD)=>{
    // console.log(elemento)
    // console.log(index)
    // console.log(arrayD)
    return false;
})
//trazendo o elemento index e o array
const novoMarcaCarros = marcaCarros.filter((el, ind, arrayI) => {
    console.log('elemento: ',el);
    console.log('index: ' ,ind);
    console.log('array: ' ,arrayI);
})
//filtrando por numero
const novoMarcaCarrosN = marcaCarros.filter((el, ind, arrayI) => {
   return typeof el === 'number'
})
console.log(novoMarcaCarrosN);
//filtrando por string
const novoMarcaCarrosS = marcaCarros.filter((el, ind, arrayI) => {
   return typeof el === 'string' && ind === 2
})
console.log(novoMarcaCarrosS);

//forEach = Ele usa o mesmo array e não cria um novo
marcaCarros.forEach((item, index) => {
    console.log('forEach= '+item +":"+index)
})

//map = Ele cria um novo array , ele altera chave e valor
// ele transforma um array para outro
const carrosMap = marcaCarros.map((car) => {
   return typeof car === 'string'
})

console.log(marcaCarros, carrosMap);

//indexOf()
//lastIndexOf()
//includes()
//find()
//findIndex()

const nProcura = [1,2,3,4,5,5, 'nome', 'fala', true, false]
//obs: quando não encontrar nada ele retorna ( -1 )
// indexOf() = Encontra o primeiro valor encontrado, posição que está esse valor
console.log(nProcura.indexOf(false))
//lasIndexOf() = Encontra o ultimo valor encontrado, posição que está esse valor
console.log(nProcura.lastIndexOf(false));
//includes() = Ele encontrando ele traz um boolean
console.log(nProcura.includes(1))
//find() = Quando ele econtrar um ele ja traz o valor se nao traz undefined
console.log(nProcura.find((item)=>{
    return item > 2
}));
//finIndex() = Quando ele encontrar ele retorna o index do valor encontrado
console.log(nProcura.findIndex((item) => {
    return item > 2
}))

//toString()
//join()
//concat()
const roupasN = ['tenis', 'roupa', 'calça']
const numeroRoupas = [1,2,3]

//toString() = converte o array em um string grande
console.log(typeof(numeroRoupas.toString()), numeroRoupas.toString())
//join() = Mesmo método acima, mas ele tem um parametro ha mais, que pode ser o separador
console.log(numeroRoupas.join('-'))
//concat() = Ele vem para juntar arrays, também podemos passar valor dentro desse array
//Podemos criar um novo array [].concat(arrayAnterior) com isso iremos criar um clone
const totalRoupasNumeros = roupasN.concat(numeroRoupas, 10,['novo valor dentro do array'])

console.log(totalRoupasNumeros);
console.log(typeof(totalRoupasNumeros[4]));


//push()
//pop()
//shift()
//unshift()
//slice()
//splice()

const motos = ['honda', 'yahama', 'suzuki' ]
//push() = Ele adicionar um valor no array
const novaMoto = 'bandite'
motos.push('novaMoto',novaMoto)
console.log(motos);
//pop() = Ele remove o ultimo valor do array alterando o array original
const removerUltimo = motos.pop()
console.log(removerUltimo);
console.log(motos);
//shift() = Ele exclui o primeiro valor do array  alterando o array original
const removerPrimeiro = motos.shift()
console.log(removerPrimeiro);
console.log(motos);
//unshift() = Ele inclui no inicio do array alterando o array original
const incluirPrimeiro = motos.unshift('ferrari', 'mclarem')
console.log(incluirPrimeiro);
console.log(motos);
//slice() = Recorta um pedaço do array, mas não altera o array original
const recorta = motos.slice(0,3)
console.log(recorta);
console.log(motos);
//splice() = Tanto para remover ou acrescentar e modifica a array original
const inseriRemove = motos.splice(0,2)
console.log(inseriRemove);
console.log(motos);
const inseriRemove2 = motos.splice(0,2,'motoVelha')
console.log(inseriRemove2);
console.log(motos);