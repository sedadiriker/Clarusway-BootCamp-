
const body = document.querySelector('body')
body.style.backgroundColor = 'wheat'

const header = document.querySelector('.header')

header.style.backgroundColor = '#ad1F79'
header.style.color = 'white'
header.style.textAlign = 'center'
header.style.padding = '12px'
header.style.width = '80%'
header.style.margin = ' 1rem auto'
header.style.borderRadius = '12px'
header.style.boxShadow = '2px 3px 21px black'



const title = document.getElementById('title')
title.textContent = 'Javascript Dom Assignment 1'
title.style.padding = '14px'
title.style.textTransform ='uppercase'
title.style.wordSpacing = '14px'
title.style.textShadow = '2px 3px 10px black'


const nav = document.querySelector('.nav-item')
nav.style.display = 'flex'
nav.style.justifyContent = 'center'
nav.style.gap = '1rem'
nav.style.listStyle = 'none'
nav.style.cursor = 'pointer'


const li = document.querySelectorAll('.nav-item li')
li.forEach(item => item.style.color = 'black')
li.forEach(item => item.style.fontSize = '1.2rem')
li.forEach(item => item.style.fontWeight = 'bold')

const section = document.querySelector('main section')
section.style.width = '70%'
section.style.display = 'flex'
section.style.justifyContent = 'center'
section.style.alignİtems = 'center'
section.style.gap = '1rem'

const username = document.querySelector('#username')
const password = document.querySelector('#password')
username.style.height = '3rem'
username.style.width = '30%'
username.value = 'Seda'
username.style.borderRadius = '12px'

password.value = '123456'
password.type = 'text'
password.style.height = '3rem'
password.style.width = '30%'
username.disabled = true
password.disabled = true
password.style.borderRadius = '12px'


const btn = document.querySelector('.btn')
btn.style.backgroundColor = '#C0cFCf'
btn.style.width = '10%'
btn.style.padding = '12px'
btn.style.borderRadius = '10px'
btn.style.border= 'none'
btn.style.cursor= 'pointer'
btn.style.boxShadow= '1px 3px 5px black'
btn.textContent = 'Giriş Yap'



const projects = document.getElementById('projects')
projects.style.width = '50%'
projects.style.margin = 'auto'
projects.firstElementChild.textContent = 'Js Dom Projects'
projects.firstElementChild.style.margin = '2rem'
projects.firstElementChild.style.fontSize = '2rem'
projects.firstElementChild.style.borderBottom = '2px solid black'
projects.firstElementChild.style.color = '#757F'
projects.firstElementChild.style.textShadow = '1.5px 1px 1px black'
projects.firstElementChild.style.textAlign = 'center'


const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]

projects.lastElementChild.innerHTML = `<li>${myProjects[0]}</li>
                                    <li>${myProjects[1]}</li>
                                    <li>${myProjects[2]}</li>
                                    <li>${myProjects[3]}</li>
                                    <li>${myProjects[4]}</li>`
                                                    

projects.lastElementChild.style.fontSize = '1.5rem'
const lis = document.querySelectorAll('#projects li')
lis.forEach(item => item.style.fontSize = '1.5rem')
lis.forEach(item => item.style.listStyle = 'number')
lis.forEach(item => item.style.padding = '10px')
lis.forEach(item => item.style.cursor = 'pointer')


btn.addEventListener('mouseenter', function() {
    btn.style.backgroundColor = '#ad1F79'; 
});

btn.addEventListener('mouseleave', function() {
    btn.style.backgroundColor = '#C0cFCf';
});


lis.forEach(item => {
    item.addEventListener('mouseenter', function() {
        item.style.backgroundColor = '#ad1F79'; 
        item.style.color = 'white'
    });
    
    item.addEventListener('mouseleave', function() {
        item.style.backgroundColor = '';
        item.style.color = 'black'
    });
})


