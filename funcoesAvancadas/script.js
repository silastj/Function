// FUNÇÕES PARTE II

//FUNCTION
function somar(){
    console.log('somar');
    return 'somar2'
}
const calculo = somar()
console.log(calculo);

// ARROW
const subtrair = () =>{
    console.log('subtrair');
    return 'subtrair 2'
}
const menos = subtrair()
console.log(menos);

const dados = () => {
    console.log('dados');
    return {
        foo:'real'
    }
}
const dado = dados()
console.log(dado)
console.log(dado.foo)
console.log(dado['foo']);

//Escopo e Léxico vc Dinâmico
const local = 'Local Externo'
function lo(){
    const local = 'Local Interno'
    console.log(local);
}
lo()

//Métodos de objetos
const dog = {
    name: 'doguinho',
    latir: function(){
        console.log(this.name + ' ' + 'au au au')
    },
    cagar:cagar,
    falar(){
        console.log(this.name+' ' + 'falou');
    }
}


function cagar(){
    console.log(this.name+' '+'cagou');
}

dog.latir();
console.log(dog);
console.log(dog.name);
dog.cagar()
dog.falar()

//apply vs call vs bind
const name = 'Silas'
function tt(string, numero){
    console.log(this.name);
    console.log(string, numero);
}
tt('nome',10)

tt.call({name:"Maria"},"string",20)
tt.apply({name:'Joao'}, ['da silva', 28])
tt.call({name:'João'}, ...['da Silva', 20])

const pp = tt.bind({name:'Joana'})
pp('Joaquina',30)


//closures
//Encadeamento de métodos ou chain

//reveal pattern
const somarRevealPattern = (function(){
        let n = 10

        function _verifyNumber(n){
            if(typeof n != 'number'){
                throw TypeError('Precisa passar numero')
            }
        }
        function somasoma(_n){
            _verifyNumber(_n)
            n += _n
            return this
        }

        function subtrair(_n){
            _verifyNumber(_n)
            n -= _n
            return this
        }

        function log(){
            console.log(n);
        }

        return{
            somasoma,
            subtrair,
            log
        }
    
})()

somarRevealPattern.somasoma('olá').log()
somarRevealPattern.somasoma(5).subtrair(10).log()
somarRevealPattern.log()





