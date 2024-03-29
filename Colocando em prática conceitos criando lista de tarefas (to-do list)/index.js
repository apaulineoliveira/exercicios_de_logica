'use strict';

let banco = [];
const GET_BANCO = () => JSON.parse(localStorage.getItem('todo list')) ?? [];
const SET_BANCO = (banco) =>localStorage.setItem('todo list', JSON.stringify(banco));
const CRIAR_ITEM = (tarefa, status, indice) => {
    const ITEM = document.createElement('label');
    ITEM.classList.add('todo_item');
    ITEM.innerHTML = `
        <input type = "checkbox" ${status} data-indice = $ {indice} >
        <div> $ {tarefa} </div>
        <input type = "button" value = "x" data-indice = ${indice}>
    `;
    document.getElementById('Todo list').appendChild(ITEM);
}

const LIMPAR_TAREFAS = () => {
    const TODO_LIST = document.getElementById("todo list");
        while (TODO_LIST.firstChild) {
            TODO_LIST.removeChild(TODO_LIST.lastChild);
        }
}

const atualizarTela = () => {
    LIMPAR_TAREFAS ();
    const BANCO = GET_BANCO ();
    BANCO.forEach ((item, indice) => CRIAR_ITEM(item.tarefa, item.status, indice)); 
}

const INSERIR_ITEM = (evento) => {
    const TECLA = evento.key;
    const TEXTO = evento.target.value;
        if(TECLA === 'Enter') {
           
        }
}

/* Código em construção, code under construction */

