let hour = document.querySelector('.hour')
let minute = document.querySelector('.minute')
let second = document.querySelector('.second')

const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

let intervalID

startBtn.addEventListener('click', () => {
    if (!intervalID) {
        intervalID = setInterval(() => {
            second.textContent = (Number(second.textContent) + 1) < 10 ? '0' + (Number(second.textContent) + 1) : (Number(second.textContent) + 1)
        
            if(second.textContent === '60') {
                minute.textContent = (Number(minute.textContent) + 1) < 10 ? '0' + (Number(minute.textContent) + 1) : (Number(minute.textContent) + 1);
                second.textContent = '00'
            }
            if(minute.textContent === '60') {
                hour.textContent = (Number(hour.textContent) + 1) < 10 ? '0' + (Number(hour.textContent) + 1) : (Number(hour.textContent) + 1);
                minute.textContent = '00'
            }
        }, 1000)
    }
})

stopBtn.addEventListener('click', () => {
    if (intervalID) {
        clearInterval(intervalID)
        intervalID = null
    }
})

resetBtn.addEventListener('click', () => {
    if (intervalID) {
        clearInterval(intervalID)
        intervalID = null
    }
    hour.textContent = minute.textContent = second.textContent = '00'
})
