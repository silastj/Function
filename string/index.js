//Strings

//replace()  ELe troca o primeiro parametro, para o segundo parametro
const re = 'O maior do mundo Deus!, maior do mundo Jesus!'
console.log(re)
console.log(re.replace('a','i'))

//replaceAll() Ele troca todos que estiver no primeiro parametro para o segundo parametro
console.log(re.replaceAll('a', 'i'))
// Com Regex, podemos usar para dar suporte aos demais navegadores
console.log('regex: '+re.replace(/i/g, "o"))

//indexOf() Posição da palavra string buscando do lado esquerdo para o direito,
//caso não existe retorna -1
console.log('indexOf: '+re.indexOf('Deus'))

//lastIndex()  Procura a mesma coisa que indexOf, mas do ultimo para o primeiro,
//caso não existe retorna -1
console.log(('lastIndex: '+re.lastIndexOf('Jesus')))

//includes() Ele retorna se existe algo, passado no parametro
console.log('includes: '+re.includes('Deus'))
