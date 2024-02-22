const container = document.querySelector('.container');
container.style.width = '100vw'
container.style.height = '100vh'
container.style.display = 'flex'
container.style.flexDirection = 'column'
container.style.justifyContent = 'center'
container.style.height = '100vh'
container.style.fontSize = '10vw'
container.style.textAlign = 'center'
container.style.transition = '3s'
container.style.backgroundColor = '#74EBD5' 
container.style.backgroundImage = 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)'
container.style.color = 'blue'
container.style.textShadow = '2px 1px 3px black'

function geriSayim(sure = 3) {
    let kalanSure = sure

    const sayac = setInterval(function() {
        container.textContent = kalanSure

        kalanSure--;

        if (kalanSure < 0) {
            clearInterval(sayac);
            container.innerHTML = "<p>Full Stack Cohort 16</p> <p>DOM Manipilasyonuna Hazır mısınız?</p> ";
            const p = container.querySelectorAll('p')
            p.forEach(item => item.style.fontSize = '6vw')
            p.forEach(item => item.style.color = 'Blue')
            p.forEach(item => item.style.textShadow = '2px 1px 4px black')
            container.style.backgroundColor = '#FF3CAC' 
            container.style.backgroundImage = 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'

            p.forEach(item => {
                item.style.transition = 'transform 1s';
                item.style.transform = 'scale(1.5)'; 
                setTimeout(() => {
                    item.style.transform = 'scale(1)'
                }, 500)
            });
        }
    }, 1500);
}

geriSayim();

