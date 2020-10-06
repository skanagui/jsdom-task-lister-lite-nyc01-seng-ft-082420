document.addEventListener("DOMContentLoaded", () => {
  // your code here
});



// to grab the input
const submitButton = document.getElementById('submit-btn')
// console.log(submitButton)
const tasksList = document.querySelector('#tasks')

submitButton.addEventListener('click', function(e) {
  const taskDescription = document.getElementById('new-task-description')
  const taskLi = document.createElement('li')

  taskLi.innerHTML = `
  ${taskDescription.value}
  <button onclick = "removeItem(this)">&times;</button>

  `
  
  tasksList.append(taskLi)

  e.preventDefault()
})
function removeItem(el){
// this.remove()
// const element = el
// console.dir(element)
// // const taskList = document.getElementById('tasks')
// element.remove()

el.parentNode.removeChild(el)
}


const deleteButtons = tasksList.querySelectorAll('button')

for(const button of deleteButtons) {
  button.addEventListener('click', function(e){
    const button = e.target
    const parentLi = button.parentElement
    // const allLis = document.querySelectorAll('li')
    console.log(parentLi)
    
  })
}

