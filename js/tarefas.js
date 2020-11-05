const inputNewT = document.querySelector('#newTarefa');
const ulGeral = document.querySelector('.tarefas ul');
const btnT = document.querySelector('#incluirT');
const liGeral = document.createElement('li');



//CLICAR NO BTN
btnT.addEventListener('click', inputTask);
inputNewT.addEventListener('keyup', function(e){
    if(e.keyCode === 13) 
    inputTask();    
});
function inputTask(e){
    if(inputNewT.value === ''){
        alert('digite algo')
        return;
    }else(inputNewT.value != '')
         var task = '<li>' + inputNewT.value + '</li>';
         ulGeral.innerHTML += task;
        
         //LIMPAMOS O INPUT E INCLUIMOS O FOCUS()
        inputNewT.value = ''
        inputNewT.focus();
        return;
};

btnT.add
