export function mod3(){
    console.log('3')
}

export const obj = {
    marca: 'Fiat',
    carro:'Punto'
}
export const modelo = 'HRV'


const name = 'Silas'
const idade = 37

export {name, idade}

export function diferentModule(){
    this.dados = 'DM'
}

export function transitionModule(){
    console.log('transitionModule');
}



export default mod3