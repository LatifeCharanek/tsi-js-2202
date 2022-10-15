const entradaTarefa = document.querySelector('#tarefa'); 

const btnAddTarefa = document.querySelector('.btn'); 

const listaDeTarefas = document.querySelector('.collection');

const filtroDeTarefa = document.querySelector('#filtro');

const btnLimpaTudo = document.querySelector('.limpar-tarefas');



function carregaMonitoresDeEventos(){

    btnAddTarefa.addEventListener('click', adicioneTarefa);

    listaDeTarefas.addEventListener('click', apagarTarefa)
    }

carregaMonitoresDeEventos();

function apagarTarefa(evento){

    //se o elemento pai estiver a clase apaga-tarefa,
   //ou seja, for o elemento"a" apague li, ou seja atarefa
    if (evento.target.parentElement.classList.contains('apaga-tarefa')){
   

    evento.target.parentElement.parentElement.remove();
}

}
function adicioneTarefa(evento){

    evento.preventDefault();


    //verifica se o usuário entrou com uma tarefa

    if(entradaTarefa.value === ''){

        alert('Entre com uma tarefa');

    }

    //Cria li com a nova tarefa

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(entradaTarefa.value));

    
    //cria aonde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');

    a.className = 'apaga-tarefa secondary-conten';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');

    i.className = 'fa fa-remove';



    //monta o elemento li para colocar em ul

    a.appendChild(i);

    li.appendChild(a);

    listaDeTarefas.appendChild(li);



    //apaga o input para entrada
}