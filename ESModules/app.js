//CommonJS - exports / require - nativo - bundle(webpack precisa ter)
//AMD - define - ??? - bundle
// UMD - CMJ+ AMD - nativo - bundle
// ESM - export/import - v.14* - nativo

// ES Modules roda em browser mais novos

import myMod1, {mod1A} from './modules/mod1.js'
import {mod2, mod2A, PI} from './modules/mod2.js'
import {obj,idade, name,modelo} from './modules/mod3.js'

// Origamid
import {Nome, Sobrenome} from './modules/origamid/clientes.js'
import Api from './modules/origamid/api.js'
import Loop from './modules/origamid/loops.js'

console.log('app rodando')
const mod1 = myMod1()
const mod2Z = mod1A()


const mod3 = mod2()
const mod4 = mod2A()
console.log(PI, obj.carro, name, idade,modelo)


//Origamid
console.log(Nome('Amós Silas'),Sobrenome('Santos'))
Api()

//Usando no React
Loop()


