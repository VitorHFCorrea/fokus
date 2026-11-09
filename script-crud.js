const addTaskBtn = document.querySelector('.app__button--add-task')
const addTaskForm = document.querySelector('.app__form-add-task')

addTaskBtn.addEventListener("click", () => {
  addTaskForm.classList.toggle("hidden")
})

addTaskForm.addEventListener("submit", (event) => {
  event.preventDefault()
})