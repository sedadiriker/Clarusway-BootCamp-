const text = document.getElementById('text')
const buton = document.getElementById('btn')
const container = document.querySelector('.container')
const upperbtn = document.getElementById('upper')

buton.addEventListener('click', () => {
    if(text.value) {
        let splitSentece = (text.value).split(' ')
    let regex = /[a,e,ı,i,o,ö,u,ü]/gi
    let totalVowels = 0
    splitSentece.forEach(item => {
        let match = item.match(regex); 
        if (match) {
            totalVowels += match.length
        }      
    })

    const pElement =document.createElement('p')
    document.querySelector('.container').appendChild(pElement)
    pElement.textContent = `There are ${totalVowels} vowels in ${text.value}`
    text.value = ''
    text.addEventListener('click', () => {
        container.removeChild(pElement)
    })
    }else{
        alert('Please enter the word or sentence.')
    }
    
})

upperbtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    const container = document.querySelector('.container');

    if(text.value) {
        const splitSentence = text.value.split(' ');

        const uppercasedWords = splitSentence.map(word => word.toUpperCase());

        const pElement = document.createElement('p');
        container.appendChild(pElement);
        pElement.textContent = `Uppercased sentence: ${uppercasedWords.join(' ')}`;

        text.value = '';

        text.addEventListener('click', () => {
            container.removeChild(pElement);
        });
    } else {
        alert('Please enter the word or sentence.');
    }
});
