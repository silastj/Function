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
console.log(localtion.assign('https://google.com')); // navega para a página e também altera o history
console.log(localtion.replace('https://www.google.com')); // ele navega na página mas nao deixa armazenado no history








