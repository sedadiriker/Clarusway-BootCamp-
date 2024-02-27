const input = document.getElementById('ssn')
const buton = document.getElementById('btn')
const output = document.querySelector('.output')

input.focus()
buton.addEventListener('click', () => {
    const ssnNo = input.value
    const splitSsn = ssnNo.split('-')

    const first = parseInt(splitSsn[0])
    const second = parseInt(splitSsn[1])
    const third = parseInt(splitSsn[2])

    if (splitSsn.length !== 3 ||
        isNaN(first) || 
        first === 0 || 
        first === 666 || 
        (first >= 900 && first <= 999) || 
        splitSsn[0].length !== 3 ||
        isNaN(second) || 
        second < 1 || 
        second > 99 ||
        splitSsn[1].length !== 2 ||
        isNaN(third) || 
        third < 1 || 
        third > 9999 ||
        splitSsn[2].length !== 4
    ) {
        output.textContent = 'Invalid SSN'
        output.setAttribute('class', 'text')
    } else {
        output.textContent = `Entered SSN (${ssnNo}) is valid`
        output.setAttribute('class', 'text')
    }
    input.addEventListener('click', () => {
        output.textContent = ''
        input.value = ''
    })

})

document.querySelector('body').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        buton.click()
    }
})
