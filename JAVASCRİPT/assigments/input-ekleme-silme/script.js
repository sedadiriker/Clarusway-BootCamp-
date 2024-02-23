const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const input = document.querySelector(".inpt")


const div = document.createElement('div')
form.after(div)


btn.addEventListener('click', (e) => {
    const p = document.createElement('p')
    div.appendChild(p)
    p.textContent = input.value.trim()
    if(!input.value.trim()){
        alert('Lütfen içerik giriniz')
    }
    p.style.textAlign = 'center'
    e.preventDefault()
    input.value = ''
})

input.addEventListener('keydown', (e) => {
    if (e.code === 'Backspace' || e.code === 'Delete') {
        const lastParagraph = div.lastElementChild;
        if (lastParagraph) {
            div.removeChild(lastParagraph);
        } else {
            alert('Silinecek bir şey yok');
        }
    }
});




