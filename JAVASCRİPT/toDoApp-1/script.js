const box = document.querySelector('.box')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const todo = document.getElementById('todo')


add.addEventListener('click', () => {
    const pElement = document.createElement('p')
    box.append(pElement)
    pElement.textContent = todo.value
    pElement.style.cursor = 'pointer'
    pElement.style.fontSize = '1.6rem'
    todo.value = ""
    todo.focus()

    if(box.children.length === 10) {
        alert('Liste sonuna gelindi...')
        add.setAttribute('disabled', 'disabled')
    }else{
        add.removeAttribute('disabled')
    }
    pElement.addEventListener('click', () => {
        if(pElement.style.textDecoration === 'line-through') {
            pElement.style.textDecoration = 'none'
        }else{
            pElement.style.textDecoration = 'line-through'
        }
    })

    pElement.addEventListener('dblclick', () => {
        pElement.remove()
    })

    clear.addEventListener('click', () =>{
        pElement.remove()
        todo.focus()
    })
    
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        add.click()
    }
})




