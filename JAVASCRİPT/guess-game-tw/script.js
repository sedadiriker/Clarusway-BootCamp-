const input = document.getElementById('userGuess')
const feedback = document.getElementById('feedback')
const evet = document.getElementById('evet')
const hayır = document.getElementById('hayır')
const button = document.getElementById('guessButton')
const onay = document.querySelector('.onay')
const tekrar = document.querySelector('.tekrar')
let hak
let random

window.onload = () => {
    input.focus()
    random = Math.floor(Math.random() * 20)
    hak = 5
}

button.addEventListener('click', () => {
    let tahmin = Number(input.value)

    if (!tahmin) { 
        feedback.textContent = 'Tahmin giriniz!'
        input.focus()
        return
    }
    if (isNaN(tahmin) || tahmin > 20 || tahmin < 0) {
        feedback.textContent = 'Lütfen geçerli bir sayı giriniz!!!';
        input.value = ''
        input.focus()
        return
    }

    if (tahmin === random) {
        document.getElementById('alkıs').play()
        feedback.textContent = `Tebrikler ${6 - hak}. hakkınızda bildiniz! Tekrar oynamak ister misiniz?`
        onay.style.display = 'block'
        return
    } else if (tahmin > random) {
        feedback.textContent = `Aşağı inin.${hak - 1} hakkınız kaldı`
    } else if (tahmin < random) {
        feedback.textContent = `Yukarı çıkın. ${hak - 1} hakkınız kaldı`
    }

    hak--;
    input.value = ''
    input.focus()

    if (hak === 0) {
        document.getElementById('ooo').play()
        feedback.textContent = `Hakkınız bitti. Doğru cevap ${random} idi. Tekrar oynamak ister misiniz?`;
        onay.style.display = 'block';
        return;
    }
})

evet.addEventListener('click', () => {
    feedback.textContent = 'Yeniden başlıyoruz. İyi şanslar';
    input.value = ''
    input.focus()
    onay.style.display = 'none'
    hak = 5
    window.onload()
    document.getElementById('bgMusic').play()

});

hayır.addEventListener('click', () => {
    feedback.textContent = 'Hoşçakal. Yine bekleriz'
    input.value = ''
    input.focus()
    onay.style.display = 'none'
    tekrar.style.display = 'block'
});

tekrar.addEventListener('click', () => {
    feedback.textContent = 'Oyun başlıyor... Tahminleri alalım.'
    input.value = ''
    input.focus()
    onay.style.display = 'none'
    tekrar.style.display = 'none'
    hak = 5
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let tahmin = Number(input.value)

        if (!tahmin) { 
            feedback.textContent = 'Tahmin giriniz!'
            input.focus()
            return
        }
        if (isNaN(tahmin) || tahmin > 20 || tahmin < 0) {
            feedback.textContent = 'Lütfen geçerli bir sayı giriniz!!!';
            input.value = ''
            input.focus()
            return
        }
    
        if (tahmin === random) {
            document.getElementById('alkıs').play()
            feedback.textContent = `Tebrikler ${6 - hak}. hakkınızda bildiniz! Tekrar oynamak ister misiniz?`
            onay.style.display = 'block'
            return
        } else if (tahmin > random) {
            feedback.textContent = `Aşağı inin.${hak - 1} hakkınız kaldı`
        } else if (tahmin < random) {
            feedback.textContent = `Yukarı çıkın. ${hak - 1} hakkınız kaldı`
        }
    
        hak--;
        input.value = ''
        input.focus()
    
        if (hak === 0) {
            document.getElementById('ooo').play()
            feedback.textContent = `Hakkınız bitti. Doğru cevap ${random} idi. Tekrar oynamak ister misiniz?`;
            onay.style.display = 'block';
            return;
        }
    }
});