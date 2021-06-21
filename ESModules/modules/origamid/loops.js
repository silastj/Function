export default function Loop(){

    const dados = [
    "Credito",
    "R$ 200",
    "R$ 400",
    "R$ 500",
    "Contas a Pagar",
    "300",
    "R$ 900" 
    ];

    //FILTRADO POR R$ COM O FILTER
    const produtos = dados.filter((produto) => {
        return produto.includes('R$')
    }) 
    console.log('filter:',produtos)

    //CRIADO UM MAP E TRATADO A STRING E DEPOIS CONVERTIDO PARA NUMBER
    const produtosNumeros = produtos.map((pNumeros) => {
        return Number(pNumeros.replace('R$ ', ''))
    })
    console.log('map: ',produtosNumeros)

    //ARRAY ORIGINAL
    console.log('Array Original: ',dados)
    }


