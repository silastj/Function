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
//findIndex()
//find()

