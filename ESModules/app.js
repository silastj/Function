//CommonJS - exports / require - nativo - bundle(webpack precisa ter)
//AMD - define - ??? - bundle
// UMD - CMJ+ AMD - nativo - bundle
// ESM - export/import - v.14* - nativo

// ES Modules roda em browser mais novos

import myMod1 from './modules/mod1.js'

console.log('app rodando')
const mod1 = myMod1()

