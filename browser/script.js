//Browser Object Model

//innerHeight -- Pega a altura do display da tela, obs; se aumentar ou diminuir o zoom pode 
//alterar os valores

//innerWidth --  Pega a largura do display da tela, obs; se aumentar ou diminuir o zoom pode 
//alterar os valores

//outerHeight -- Pega a altura do browser

//outerWidth -- Pega a lagura do browser

//screenX -- Pega o eixo horizontal do mouse

//scrennY -- Pega o eixo vertical do mouse

//history -- Consegue guardar as páginas navegadas e também navegar pelas páginas 
//usando o history.back e history.go
//podemos invocar dentro da função o history.back para voltar e o history.go para avançar

//location
console.log(location.href) ////http://127.0.0.1:51049/CursoJS/browser/index.html
console.log(location.hash); //http://127.0.0.1:51049/CursoJS/browser/index.html#silas
console.log(location.search); // http://127.0.0.1:51049/CursoJS/browser/index.html?teste=novo&molhou=seco
console.log(location.protocol);
console.log(location.pathname);
//console.log(location.assign('https://google.com')); // navega para a página e também altera o history
//console.log(location.replace('https://www.google.com')); // ele navega na página mas nao deixa armazenado no history

//navigator -  verificar dados do navegador
console.log(navigator.userAgent)
console.log(navigator.plugins);
console.log(navigator.platform);
console.log(navigator.cookieEnabled); // e outros

//Screen a tela do user
console.log(screen.availHeight)
console.log(screen.availWidth);
console.log(screen.height);
console.log(screen.width);

//método window
//alert()
//alert('Olá Mundo')

//confirm()
const confirmar = confirm('Você é maior que 18 anos?')
if(confirmar === true){
    const h1 = document.createElement('h1')
    const rh1 = document.createTextNode('Parabéns vc ganhou uma cerveja \ o /')
    h1.appendChild(rh1)
    console.log(h1);
    document.body.appendChild(h1)
}

//prompt() -- Recebe um input dentro do modal
//open()
//close() só funciona se eu abri com o open()
//print() ele imprime a página

//scrollTo(x,y) -- ele passa dois parametros o primeiro inicio o segundo onde ele quer chegar
(function(){
    scrollTo(0, 200)
}())
//scroolBy(x,y) -- ele tem dois parametros primeiro ele inicia o segunda(50) onde ele quer chegar,
//acionando outra(50) avança em total de 100
setTimeout(() => {    
    (function(){
        (scrollBy(0,400));
    }())
}, 2000);
//pageXOffset - scroll horizontal
console.log(pageXOffset);
//pageYOffset - scroll vertical
console.log(pageYOffset);













