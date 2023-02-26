import {v4 as uuidV4} from 'uuid'

const list = document.querySelector<HTMLUListElement>('#list')
const input = document.querySelector<HTMLInputElement>('#new-task-title')
const form = document.getElementById('new-task-form') as HTMLFormElement

form.addEventListener("submit", e => {
  e.preventDefault()
  if(input?.value == "" || input?.value == null ) return
  
  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask)
})
