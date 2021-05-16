//Strings

//replace()  ELe troca o primeiro parametro, para o segundo parametro
const re = 'O maior do mundo Deus!, maior do mundo Jesus!       '
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

//includes() Ele retorna se existe algo, passado no parametro e returnando boolean
console.log('includes: '+re.includes('Deus'))

//slice() Corta uma string, passando dois parâmetros ou apenas um parâmetro e o segundo é opcional
// Ele aceita parâmetros negativos
console.log('slice: '+ re.slice('2', '7'))

//substring() Igual o slice() mas no parâmetro negativo ele entende como zero
console.log('substring: ' + re.substring('2','7'))

//toLowerCase()  Converte tudo para Minúsculo
console.log('toLowerCase(): '+ re.toLowerCase());

//toUpperCase() Converte tudo para Maiúsculo
console.log('toUpperCase(): '+ re.toLocaleUpperCase());

//trim()  Remover os espaços em branco no começo e fim
console.log('trim(): ' + re.trim())

//trimStart() Remover os espaçõs no começo
console.log('trimStart(): ' + re.trimStart());

//trimEnd() Remover os espaços no fim
console.log('trimEnd(): '+ re.trimEnd());

//padStart() Ele preenche a quantidade de caracteres no início, passando primeiro parâmetro
// no segundo parâmetro opicional pode setar o valor que será preenchido
const valores = '0123456789'
console.log('padStart():' + valores.padStart(30, '%'));

//padEnd() Ele preenche a quantidade de caracteres no fim, passando primeiro parâmetro
// no segundo parâmetro opicional pode setar o valor que será preenchido
console.log('padEnd(): ' + valores.padEnd(30, '$'));

//desafio
const telefone = '996263048'
const divisor = '-'
const telefoneslice = telefone.slice('0','5')
console.log(`desafio: ${telefoneslice}${divisor.padEnd(5,'*')}`);

//startsWith() Verifica se inicia com a palavra X e retorna um boolean
// podemos passar o segundo parãmetro, onde será iniciado a consulta 
const frase = 'Hoje é Domingo lindo.'
console.log('startsWith: ' + frase.startsWith('Hoje'))
console.log('startsWith: ' + frase.startsWith('Hoje', 1))

//endsWith() Verifica se o fim inicia com a palavra X e retorna um boolean
// podemos passar o segundo parãmetro, consulta o tamanho da string
 console.log('endsWith: ' + frase.endsWith('lindo'))
 console.log('endsWith: ' + frase.endsWith('é',6))

 //chartAt() Verifica qual valor está na posição
console.log('chartAt(): ' + telefone.charAt(1));

 //chartCodeAt() Passando um parãmetro da posição ,  ele retorna o código 
 console.log('chartCodeAt(): ' + telefone.charCodeAt(1))
 console.log('chartCodeAt(): ' + telefone.charCodeAt(8))

 //split()  Quebrar a string usando split()
const nomeCompleto = 'Amós Silas Pereira dos Santos'
const corta = nomeCompleto.toUpperCase().split(' ')
console.log(corta);
