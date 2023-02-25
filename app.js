const body = document.querySelector('body')
const input = document.querySelectorAll('input')[0]
const taskInput = document.querySelectorAll('input')[1]
const addButton = document.querySelectorAll('button')[0]
var list = document.querySelectorAll('ul')[0]
const count = document.querySelector('div.itemCount')
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
        element.addEventListener('click', (e) => {
            const userInput = window.prompt(`Are you sure that you want to remove "${chores}"`)
            if (userInput === 'YES') {
                chores.indexOf(e)
                e.target.remove()
                chores.splice(e,1)
                count.innerHTML = `${chores.length} items`
            }
        })
        list.appendChild(element)
        count.innerHTML = `${chores.length} items`
    }
    
})
