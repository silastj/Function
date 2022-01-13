const list = document.querySelectorAll('ul li')
console.log('list', [...list])

const form = document.querySelector('.formCadastro')
const nome = document.querySelector('.nome')
const email = document.querySelector('.email')
const enviar = document.querySelector('.enviar')
const textarea = document.querySelector('.textarea')
const total = textarea.maxLength
console.log('total', total)

const box = document.querySelector('.Modal')
const boxSucess = document.querySelector('.ModalSucess')
const close = document.querySelectorAll('.box button')
console.log('close', close)
const cliente = document.querySelector('.cliente')


form.addEventListener('submit', function () {
    if (nome.value === '' || email.value === '') {
        showModal()
    } else {
        showModalSucess()
    }
})

textarea.addEventListener('input', function () {
    const clicou = this.value.length
    if (total === clicou || total == clicou) {
        console.log('chegou')
    }
})

function showModal() {
    box.style = 'display:flex'
    setTimeout(()  =>{
        closeModal()
    },3000)

}
function closeModal() {
    box.style = 'display:none'
    boxSucess.style = 'display:none'
}
function showModalSucess() {
    boxSucess.style = 'display:flex'
    localStorage.setItem('modal', 'modalAberto')
}

close.forEach(function(item){
    item.addEventListener('click', function(){
        closeModal()
    })
})

function verifyClient(){
    const client = localStorage.getItem('modal')
    if(client)
    cliente.style = 'display:flex;color:green;font-weight: 800';
    return;
}
    

window.onload = verifyClient()

// close.addEventListener('click', closeModal)



const btnListado = document.querySelector('.lista button')
function addItem(){
    const listInput = document.querySelector('.listado')
    const resListInput = listInput.value
    const res = document.querySelector('.resultado')
    res.innerHTML += resListInput +'<br/>'
    listInput.value = '';
    listInput.focus();
}





btnListado.addEventListener('click', addItem)
