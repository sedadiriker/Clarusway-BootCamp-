const sepeteEkleBtns = document.querySelectorAll('.card .btn')
const cards = document.querySelectorAll('.card')
const tbody = document.querySelector('tbody')
const sepetim = document.querySelector('.cart svg')
const table = document.querySelector('.table')
let sepet_toplam = document.querySelector('.sepet-toplamı')
let adet_toplamı = document.querySelector('.adet-toplamı')
const toplamDelete = document.querySelector('toplam-delete')
const count = document.getElementById('count')


const stok = [
    {
        ürünAdı : 'Çubuklu Forma',
        stokAdet : 5
    },
    {
        ürünAdı : 'Sarı Baby Set',
        stokAdet : 4
    },
    {
        ürünAdı : 'Logo Şapka',
        stokAdet : 3
    },
    {
        ürünAdı : 'Kol saati',
        stokAdet : 2
    },

]
    


let sepetUrunler = []
let adetTd //! Globale almam gerekti, arttırırken güncellemek için.
let fiyatTd
let option

sepeteEkleBtns.forEach(sepeteEkle => {
    sepeteEkle.addEventListener('click', (e) => {
        
        const ürünBilgileri = {
            id: new Date().getTime(),
            ürünAdı : e.target.closest('.card').querySelector('.card-title').textContent,
            fiyat: parseFloat((e.target.closest('.card').querySelector('.card-price').textContent).replace('₺', '').replace('.', '').replace(',', '.')),
            img : e.target.closest('.card').querySelector('img').getAttribute('src'),
            adet : 1
        }
       
        //!option değerine göre ekleme
        option = e.target.closest('.card').querySelector('#adet')

        let ayniUrunIndex = sepetUrunler.findIndex(ürün =>
            ürün.ürünAdı === ürünBilgileri.ürünAdı) //! aynı ürün varsa ilgili indeksi döndürür
        if(option) {
            //! üründen aynı var mı kontrol
            if(ayniUrunIndex !== -1) {
                adetTd.textContent = sepetUrunler[ayniUrunIndex].adet * parseInt(option.value) + parseInt(adetTd.textContent)
                console.log(adetTd)
    
                fiyatTd.textContent = (ürünBilgileri.fiyat * parseInt(adetTd.textContent)).toFixed(2)
                
            } else {
                DOM(ürünBilgileri);
                sepetUrunler.push(ürünBilgileri);
            }
        }
        
       option.value = '1'
    //    adet_toplamı.textContent = toplamlar()
    toplamlar()


    
    }
)})

//! Dom a yazma
const DOM = ({id,ürünAdı,fiyat,img,adet}) => {
    
    const tr = document.createElement("tr")

    const appendTd = (content)=>{
        const td = document.createElement("td")
        td.textContent = content;
        return td
        }
    
    //Resim
    const imageTd = document.createElement('td') 
    imageTd.classList.add('class', 'w-25')   
    const image = document.createElement('img')
    image.classList.add('img-fluid')
    imageTd.appendChild(image)
    image.setAttribute('src',`${img}`)
    

    //çöp sepeti
    const çöpSepetiTd = document.createElement('td')    
    const çöpSepeti = document.createElement('i')
    çöpSepeti.id = id
    çöpSepeti.classList.add( 'fas','fa-trash-can','remove')
    çöpSepetiTd.appendChild(çöpSepeti)
    
    //adet
    adetTd = document.createElement('td')
    adetTd.textContent = adet * parseInt(option.value)
    adetTd.style.textAlign = 'center'

    //fiyat
    fiyatTd = document.createElement('td')
    fiyatTd.textContent = (fiyat * parseInt(option.value)).toFixed(2)

    //satıra ekle
    tr.append(
        imageTd,
        appendTd(ürünAdı),
        adetTd,
        fiyatTd,
        çöpSepetiTd
    )
    tr.id = id
    tbody.prepend(tr)
    
}

//!sepet silme iconu dinleme
tbody.addEventListener('click', (e) => {

    if (e.target.classList.contains('toplam-delete')) {
        confirm('Sepeti boşaltmak istediğinizden emin misiniz?')
        if(confirm) {
            const tumTrler = document.querySelectorAll('tbody tr')
            for (let i = 0; i < tumTrler.length - 1; i++) {
                tumTrler[i].remove()
                sepetUrunler.length = 0
                // console.log(sepetUrunler);
            }
            adet_toplamı.textContent = ''
            sepet_toplam.textContent = ''
            window.location.reload();
        }
    }else if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove()
        // console.log(e.target.id);

        //! sepetten aynı id ye sahip ürünü bulup kaldırma
        const id = e.target.id 
        sepetUrunler = sepetUrunler.filter((ürün)=> ürün.id != id)

        //!Siinen tutarı toplamdan düşme
        const silinenTutar = Number((e.target.parentElement.parentElement).children[3].textContent)
        // console.log(sepet_toplam);
        sepet_toplam.textContent = (Number(sepet_toplam.textContent) - silinenTutar).toFixed(2)
        // console.log(silinenTutar);

        //!silinen adeti güncelleme
        const silinenAdet = Number((e.target.parentElement.parentElement).children[2].textContent)
        adet_toplamı.textContent -= silinenAdet
        if(tbody.children.length == 1) {
            window.location.reload();
        }
    }
    
})


//!Sepete tıklama
sepetim.addEventListener('click', () =>{
    
    if(tbody.children.length > 1) {
        table.classList.toggle('hidden')
    }else{
        table.classList.add('hidden')
    } 
})

//!  toplamları hesaplama
const toplamlar = () => {
    //!adet toplamı hesaplama   &&    //! tutar toplamı hesaplama

    const adetler = document.querySelectorAll('tbody tr')

    let toplamAdet = 0
    let toplamTutar = 0
    for(let i = 0; i < adetler.length - 1; i ++) {
        toplamAdet += Number(adetler[i].children[2].textContent)
        toplamTutar += Number(adetler[i].children[3].textContent)
    }
    adet_toplamı.textContent = toplamAdet
    adet_toplamı.style.textAlign = 'center'

    sepet_toplam.textContent = toplamTutar.toFixed(2)
    count.textContent = toplamAdet
}



