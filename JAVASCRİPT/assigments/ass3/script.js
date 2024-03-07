const images = document.querySelector('.images')
const buton = document.querySelector('.btn button')
const mainContainer = document.querySelector('.main-container')
mainContainer.style.display = 'none'

//! LOADİNG
const loading = document.querySelector('.loading')
const pler = document.querySelectorAll('.paragraphs p')
let süre = 100
let kaydırma = 10
let yön = 1; // Yön: 1 yukarı, -1 aşağı

function movie() {
    pler.forEach((p, index) => {
        setTimeout(() => {
            p.style.transform = `translateY(${kaydırma * yön}px)`;
        }, index * süre);
    });
    yön *= -1; // Yönü değiştir
}

// 3 saniye sonra dur ve loading kapansın main-container gelsin
const intervalID = setInterval(movie, pler.length * süre);
setTimeout(() => {
    clearInterval(intervalID);
    loading.style.display = 'none'
    mainContainer.style.display = 'flex'
}, 3000)

//!FETCH


fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then((res) => {
        if (!res.ok) {
            throw new Error('Something')
        }
        return res.json()
    })
    .then((data) => {
        showData(data)
    })
    .catch((error) => document.write(error))


const showData = (data) => {
    console.log(data)

    //rastgele 10 veri
    const randomVerı = getRandom(data, 12)

    randomVerı.forEach(data => {
        console.log(data.url)

        const img = document.createElement('img')
        img.style.width = '250px'
        img.style.height = '200px'
        img.src = data.url
        images.appendChild(img)
    })
}

buton.addEventListener('click', () => {
    images.innerHTML = ''

    loading.style.display = 'flex';
    mainContainer.style.display = 'none'

    function movie() {
        pler.forEach((p, index) => {
            setTimeout(() => {
                p.style.transform = `translateY(${kaydırma * yön}px)`;
            }, index * süre);
        });
        yön *= -1; // Yönü değiştir
    }
    
    // 3 saniye sonra dur ve loading kapansın main-container gelsin
    const intervalID = setInterval(movie, pler.length * süre);
    setTimeout(() => {
        clearInterval(intervalID);
        loading.style.display = 'none'
        mainContainer.style.display = 'flex'
    }, 3000)

    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Something')
            }
            return res.json()
        })
        .then((data) => {
            showData(data)
        })
        .catch((error) => {
            const errorImage = './error.gif'
            mainContainer.innerHTML = `<img src="${errorImage}" alt="Error Image">`
        })


    const showData = (data) => {
        console.log(data)

        //rastgele 10 veri
        const randomVerı = getRandom(data, 12)

        randomVerı.forEach(data => {
            console.log(data.url)

            const img = document.createElement('img')
            img.style.width = '250px'
            img.style.height = '200px'
            img.src = data.url
            images.appendChild(img)
        })
    }
})

//rastgele seçme fonk.
function getRandom(array, count) {
    const random = array.sort(() => 0.5 - Math.random())
    return random.slice(0, count)
}


//tarih saat
function time() {
    const now = new Date()
    const date = now.toLocaleString('tr-TR')
    document.getElementById('tarih').textContent = date
    document.getElementById('tarih').style.fontSize = '1.5rem'
}

setInterval(time, 1000);