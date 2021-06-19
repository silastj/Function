import {diferentModule, transitionModule} from './mod3.js'

export function mod2(){
    console.log('mod2')
}


export function mod2A(){
    console.log('mod2A')
}


export const PI = Math.PI

console.log(new diferentModule())
console.log(transitionModule())




export default mod2()