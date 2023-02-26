import {v4 as uuidV4} from 'uuid'

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list')
const input = document.querySelector<HTMLInputElement>('#new-task-title')
const form = document.getElementById('new-task-form') as HTMLFormElement

form.addEventListener("submit", e => {
  e.preventDefault()
  if(input?.value == "" || input?.value == null ) return
  
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask)
  input.value = ''
})

function addListItem(task: Task) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}
