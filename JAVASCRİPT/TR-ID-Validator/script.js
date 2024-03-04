const input = document.getElementById('kımlık-no')
const btn = document.querySelector('button')
const check = document.querySelector('.check')


document.addEventListener('DOMContentLoaded', () => {
    input.focus()
    
    // Buton tıklamayı dinleme
    btn.addEventListener('click', () => {

        if(input.value.length != 11) {
            if(check.children.length > 0) {
                check.removeChild()   
            }
     
            const pElement = document.createElement('p')
            pElement.textContent = 'Lütfen 11 haneli bir TC kimlik No giriniz'
            check.appendChild(pElement)
            input.value = ''
            input.focus()
            
        }else{
            const splitedValue = input.value.split('')
            let sumEven = 0 // 1., 3., 5., 7. ve 9. rakamlardaki rakamları toplamı
            let sumOdd = 0 // 2., 4., 6. ve 8. rakamlardaki rakamların toplamı
            let sumall9Digit = 0
    
            for(let i = 0 ; i < 9; i+=2) {
                sumEven += parseInt(splitedValue[i])
            }
    
            for(let i = 1 ; i < 8; i+=2) {
                sumOdd += parseInt(splitedValue[i])
            }
    
            for(let i = 0 ; i < 9; i++) {
                sumall9Digit += parseInt(splitedValue[i])
            }
    
            const value10Digit = parseInt(input.value[9])
            console.log(value10Digit);
            const value11Digit = parseInt(input.value[10])
            console.log(value11Digit);
    
            if((((sumEven * 7) - sumOdd) % 10 != value10Digit)  &&  ((sumall9Digit + value10Digit)) % 10 != value11Digit) {
                const pElement = document.createElement('p')
                pElement.textContent = 'Geçersiz TC Kimlik No'
                check.appendChild(pElement)
                input.value = ''
                input.focus()
    
            }else {
                const pElement = document.createElement('p')
                pElement.textContent = 'Geçerli TC Kimlik No'
                check.appendChild(pElement)
                input.value = ''
                input.focus()
            }
        }
        
    })

    // Her input alanına girişte p elementini silme
    input.addEventListener('input', () => {
        if (check.children.length > 0) {
            document.querySelector('.check p').remove()
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            btn.click()
        }
    })
})



