
const country_info = document.querySelector('.country-info')
const flag = document.querySelector('.flag')
const country_name = document.querySelector('.country-name')
const lıght = document.querySelectorAll('.lıght')

window.addEventListener('load', () => {
    const countryName = localStorage.getItem('country')

    const getCountriess = async () => {
        const URL = 'https://restcountries.com/v3/all'
    
        try {
            const res = await fetch(URL)
    
            if(!res.ok) {
                throw new Error(`Something went wrong ${res.status}`)
            }
    
            const data = await res.json()
            displayCountriess(data)
        }catch{
            
        }
    }
    
    
    
    const displayCountriess = (data) => {

        data.forEach(country => {
            const {name:{common},region,capital,languages,currencies,population,borders,maps,flags} = country

            if(common == countryName) {

                //!flag
                flag.innerHTML = `
                    <img class="w-100 h-100" src="${flags[1]}" alt="">
                `
                //! Country Name
                country_name.innerHTML = `
                        <p>${common}</p>
                `
                //!Region
                lıght[0].textContent = `${region || ''}`

                //!capitals
                lıght[1].textContent = `${capital || ''}`
                 
                //!Languages
                for (const lang in languages) {
                    lıght[2].textContent = `${languages[lang]}`
                }

                //!currencies
                for(const currency in currencies) {
                    if(currencies[currency].symbol) {
                        lıght[3].textContent = `${currencies[currency].name}, ${currencies[currency].symbol}`
                    }else{
                        lıght[3].textContent = `${currencies[currency].name}`
                    }
                }
                
                //!population
                    lıght[4].textContent = `${population.toLocaleString('tr-TR')}`

                //! borders
                if (borders) {
                    borders.forEach(border => {
                        lıght[5].textContent += border + ' , '
                        if(border == borders[borders.length -1]) {
                            lıght[5].textContent += border
                        }
                    })
                }else{
                    lıght[5].textContent = 'None'
                }

                //!maps
                console.log(maps.googleMaps);
                lıght[6].innerHTML = `
                    <a href="${maps.googleMaps}" target="_blank">Google Maps Link</a>
                `

            }
        })
    }

    getCountriess()
})


