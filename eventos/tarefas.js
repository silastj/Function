// const inttt = document.querySelector('#newTarefa');
const ulGeral = document.querySelector('.tarefas ul');
const liGerais = document.querySelectorAll('.tarefas ul li');
const btnT = document.querySelector('#incluirT');
const liGeral = document.createElement('li');

//EVENTO DE LISTA CONCLUIDA
liGerais.forEach((item) => {
    item.addEventListener('click', function(e){
        item.classList.toggle('done');
        //   console.log(e.target);
    })
})

//CLICAR NO BTN
btnT.addEventListener('click', inputTask);
inttt.addEventListener('keyup', function(e){
    if(e.keyCode === 13) 
    inputTask();    
});
function inputTask(e){
    if(inttt.value === ''){
        alert('digite algo')
        return;
    }else(inttt.value != '')
         let li = document.createElement('li');
         let frase = document.createTextNode(inttt.value);
         li.appendChild(frase);
         ulGeral.appendChild(li);
        
         //LIMPAMOS O INPUT E INCLUIMOS O FOCUS()
        inttt.value = ''
        inttt.focus();
        return;
};

