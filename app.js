const body = document.querySelector('body')
const input = document.querySelectorAll('input')[0]
const taskInput = document.querySelectorAll('input')[1]
const addButton = document.querySelectorAll('button')[0]
var list = document.querySelectorAll('ul')[0]
var chores = []

input.addEventListener('click', () => {
    body.classList.toggle('dark')
})

addButton.addEventListener('click', () => {
    const inputValue = taskInput.value
    if (chores.includes(inputValue)) {
    }
    else {
        chores.push(inputValue)
        const element = document.createElement('li')
        const textNode = document.createTextNode(inputValue)
        element.appendChild(textNode)
        list.appendChild(element)
    }
})