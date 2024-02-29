const products = document.querySelector('.products')
const araToplam = document.querySelector('.ara-toplam-tl')
const kdv = document.querySelector('.kdv-tl')
const toplam = document.querySelector('.toplam-tl')

window.addEventListener('load',() => {
    calculatedPrice()
})
products.addEventListener('click', (e) => {

    /* --------------------------- */
    /*            Ekleme           */
    /* --------------------------- */
    if (e.target.classList.contains('fa-plus')) {
        const previusElement = e.target.previousElementSibling
        const productPriceElement = e.target.closest('.product').querySelector('#product-price');

        if (previusElement.textContent >= 5) {
            alert('En fazla 5 ürün ekleyebilirsiniz')
            e.target.disabled = true
        } else {
            previusElement.textContent++
        }

        const unitPrice = parseFloat(e.target.closest('.product').querySelector('.dollar').textContent)
        productPriceElement.textContent = (unitPrice * parseInt(previusElement.textContent)).toFixed(3)

    }

    /* --------------------------- */
    /*            azaltma           */
    /* --------------------------- */
    if (e.target.classList.contains('fa-minus')) {
        const nextElement = e.target.nextElementSibling
        const productPriceElement = e.target.closest('.product').querySelector('#product-price');
        if (nextElement.textContent == 0) {
            e.target.disabled = true;
        } else {
            nextElement.textContent--
        }
        const unitPrice = parseFloat(e.target.closest('.product').querySelector('.dollar').textContent)
        productPriceElement.textContent = unitPrice * parseInt(nextElement.textContent)

    }

    /* --------------------------- */
    /*            silme           */
    /* --------------------------- */
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.closest('.product').remove()
        if (document.querySelector('.products').children.length === 0) {
            document.querySelector('.sepete-ekle').style.display = 'none'
            document.querySelector('.sepet').style.display = 'flex'
        }
    }

    calculatedPrice()

})

const calculatedPrice = () => {
    const productPricesToplam = Array.from(document.querySelectorAll('.product-info #product-price')).map(priceElement => Number(priceElement.textContent)).reduce((acc, cur) => acc + cur, 0)

araToplam.textContent= (productPricesToplam - (productPricesToplam * 18) / 100).toFixed(3)

kdv.textContent = ((productPricesToplam * 18) / 100).toFixed(3)
toplam.textContent = productPricesToplam.toFixed(3)
}


document.querySelector('.sepete-ekle .fa-trash-can').addEventListener('click', () => {
    document.querySelector('.sepete-ekle').style.display = 'none'
    document.querySelector('.sepet').style.display = 'flex'
})




