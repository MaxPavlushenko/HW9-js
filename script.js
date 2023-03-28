"use strict"

function createToDoList() {

  const input = document.querySelector(`input`)
  const button = document.querySelector(`button`)


  input.addEventListener(`change`, createTask)
  button.addEventListener(`click`, deleteTasks)


  function createTask(event) {
    const value = event.target.value 
    
    if(!value.trim()) return alert("Вы оставили пустую строку")

    const taskContainer = document.createElement(`div`)
    taskContainer.className = 'taskContainer'

    const checkbox = document.createElement(`input`)
    checkbox.setAttribute(`type`,'checkbox')
    checkbox.className =`checkbox`

    const task = document.createElement(`span`)
    task.className =`task`
    task.innerHTML = value

    taskContainer.append(checkbox,task)

    const tasks = document.querySelector(`.tasks`)
    tasks.prepend(taskContainer)

    input.value = ''

    checkbox.addEventListener(`click`,checkTask)
    task.addEventListener(`click`,editTask)

  }

  function checkTask(){
    this.nextSibling.classList.toggle("active")

  }
  function editTask(event){
    event.target.innerHTML = prompt("Отредактируйте свою задачу", event.target.textContent)

  }

  function deleteTasks() {
    const deleteElements = document.querySelector(`.tasks`)
    deleteElements.innerHTML=' ';

  }

}

createToDoList()
