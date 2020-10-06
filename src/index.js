document.addEventListener("DOMContentLoaded", () => {
  // your code here
});



// to grab the input
const submitButton = document.getElementById('submit-btn')
// console.log(submitButton)

submitButton.addEventListener('click', function(e) {
  const taskDescription = document.getElementById('new-task-description')
  const taskLi = document.createElement('li')

  taskLi.innerHTML = `
  ${taskDescription.value}
  <button>&times;</button>
  `
  
  const tasksList = document.querySelector('#tasks')
  tasksList.append(taskLi)

  e.preventDefault()
})

const allLis = document.querySelectorAll('li')

const deleteButtons = document.querySelectorAll('button')

for(const button of deleteButtons) {
  button.addEventListener('click', function(e){
    const button = e.target
    const parentLi = button.parentElement
    console.log(parentLi)
    
  })
}

