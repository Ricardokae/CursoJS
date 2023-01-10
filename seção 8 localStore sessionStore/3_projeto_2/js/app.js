const form = document.querySelector('.form')
const tarefaInput = document.getElementById('tarefa')
const lista = document.getElementById('lista')

const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function adicionarTarefa(event){
  event.preventDefault();

  const tarefa = tarefaInput.value;
  tarefas.push(tarefa);
  tarefaInput.value = '';
  saveTask()

  renderTask()
}

function renderTask(){
  lista.innerHTML = '';
 
  for(i = 0; i < tarefas.length; i++){
    const tarefa = tarefas[i]

    const taskText = document.createTextNode(tarefa)
    const li = document.createElement('li')
    const removeButton = document.createElement('button')
    const removeButtonText = document.createTextNode('Excluir')

    removeButton.appendChild(removeButtonText)
    removeButton.setAttribute('data-index', i)
    removeButton.addEventListener('click', removeItem)
    li.appendChild(taskText)
    li.appendChild(removeButton)
    lista.appendChild(li)  
  };
}

function removeItem(event){
const index = event.target.getAttribute('data-index')
tarefas.splice(index, 1)
saveTask()
renderTask()
}

//localStore
function saveTask(){
 localStorage.setItem('tarefas', JSON.stringify(tarefas))
}
//event
form.addEventListener('submit',adicionarTarefa);
//init ap
renderTask()
