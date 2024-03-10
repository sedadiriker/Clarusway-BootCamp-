const button = document.querySelector('.sec')
const kullanıcı_girisi = document.querySelector('.kullanıcı_girisi')
const display_res = document.querySelector('.display-res')
const city_name = document.querySelector('.city-name')
const geri = document.querySelector('.btn')
const cityInput = document.getElementById('cityInput')

cityInput.focus()
button.addEventListener('click', async () => {
    const cityValue = cityInput.value.toLowerCase().trim()

    if (cityValue === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lütfen bir şehir adı girin!'
        })
        return
    }
    const getWeather = async () => {
        const URL = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityValue}`
        const API_KEY = 'apikey 3MP7hiAHuwOqYb5qXtE7em:0MRyHwBXa4riIOuo4joona'

        try {
            const res = await fetch(URL, {
                //!header
                headers: {
                    'authorization': `${API_KEY}`
                }
            })

            if (!res.ok) {
                throw new Error('Hata var')
            }

            const data = await res.json()
            if (data.success === false) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Şehir bulunamadı!'
                })
                return
            }
            displayWeather(data)
        } catch {
            console.log('hata var')
        }
    };

    const displayWeather = (data) => {
        kullanıcı_girisi.classList.add('hidden')
        geri.classList.remove('hidden')
        city_name.textContent = `${cityValue.toLocaleUpperCase('tr-TR')} ili Haftalık Hava durumu`
        console.log(data)

        const { result,city } = data
        result.forEach(dayInfo=> {
            const { day, date, icon, description,humidity,degree } = dayInfo
            display_res.innerHTML += `
            <div class="card col-12 col-md-1 text-center" style="width: 11rem;">
                <img src="${icon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fs-6 fw-bold">${date} <br> ${day}</h5>
                    <h2 class="fs-1 fw-bold">${Math.ceil(degree)} °C</h2>
                    <p class="card-text desc">${description}</p>
                    <p class="card-text">Nem %${humidity}</p>
                </div>
            </div>
        `
        })
        geri.addEventListener('click', () => {
            window.location.reload()
        })
        


    }

    getWeather()
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        button.click()
        geri.click()
    }
})
