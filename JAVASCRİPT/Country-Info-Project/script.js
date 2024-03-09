const container = document.querySelector('.container')
const countriesContainer = document.querySelector('.countries')
const country_info = document.querySelector('.country-info')
const search = document.getElementById('search')

const getCountries = async () => {
    const URL = 'https://restcountries.com/v3/all'

    try {
        const res = await fetch(URL)

        if (!res.ok) {
            throw new Error(`Something went wrong ${res.status}`)
        }

        const data = await res.json()
        displayCountries(data)
    } catch {
        container.innerHTML = `
            hata          
        `
    }
}

const displayCountries = (data) => {
    data.forEach(country => {
        const { name: { common }, region, capital, languages, currencies, population, borders, maps, flags } = country

        countriesContainer.innerHTML += `
        <div class= 'col-6 col-md-3 col-lg-2  border py-1 country'>
            <a href="../ınfo"class='d-flex flex-column align-items-center gap-4 text-decoration-none text-black h-100 w-100'>
            <div class="border border-3 border-black w-75 h-50 my-5 image-cont">
            <img src="${flags[1]}" class="w-100 h-100" alt="flag" /> 
            </div>
            
            <p class='fw-bold h-50 text-center name'>${common}</p>
            </a>
        </div>

    `
        
    })
}


getCountries()


countriesContainer.addEventListener('click', (e) => {
    const target = e.target
    const closest = target.closest('.country')
    let countryname = closest.querySelector('.name').textContent
    localStorage.setItem('country', countryname)   
    console.log(countryname);
})


search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchValue = e.target.value.toLowerCase()
        const countryElements = document.querySelectorAll('.country')

        countryElements.forEach(countryElement => {
            const nameElement = countryElement.querySelector('.name')
            const countryName = nameElement.textContent.toLowerCase()
            // console.log(searchValue)
            if (searchValue === countryName) {

                countryElement.style.boxShadow = '2px 3px 10px black'
                // Eğer aranan değer ile ülke adı eşleşiyorsa, ilgili ülkenin bulunduğu konuma manuel olarak kaydır
                const yOffset = -200; // İsteğe bağlı olarak, kaydırma miktarını ayarlayabilirsiniz
                const targetPosition = countryElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' })
                e.target.value = ''
            }
        })
    }
})



