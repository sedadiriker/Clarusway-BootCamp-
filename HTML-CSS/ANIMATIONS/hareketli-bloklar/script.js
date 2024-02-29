let boxes = document.querySelectorAll('.box')


boxes.forEach(box => {
    box.addEventListener('click', function() {
        let images = this.querySelectorAll('img')
        images.forEach(image => {
            image.style.transition = '1s ease'
            if(image.style.opacity === '1') {
                box.classList.add('box-rotate')
                image.style.opacity = '0';
            }else {
                image.style.opacity = '1'
            }
        })
    })
})


