document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu')
    const open = document.querySelector('.open')
  
    hamburgerMenu.addEventListener('click', () => {
        if (open.style.display === 'none') {
            open.style.display = 'inline'
            hamburgerMenu.style.transform = 'scale(0.7)'
        } else {
            open.style.display = 'none'
            hamburgerMenu.style.transform = 'scale(1)'
        }
    });

    gelirsekme.setAttribute('class','gelirler_btn-none')
    gidersekme.setAttribute('class','gelirler_btn-none')
    
    localStorage.getItem('hesaplananToplamGelir')


})


            



//! GELİR EKLEME BÖLÜMÜ

//? Takvim

const today = new Date().toISOString().split('T')[0]
//   console.log(today);
  const myDateInput = document.getElementById('myDate')
  myDateInput.value = today

//? GELİR EKLEME
const tarih = document.getElementById('myDate')
const gelirAdı = document.getElementById('gelir_adı')
const gelirTutar = document.getElementById('gelir-tutar')
const gelirBtn = document.querySelector('.ekle-btn')
const hesaplananGelir = document.querySelector('.hesaplanan_gelir')
let toplamGelir = 0


gelirBtn.addEventListener('click', () => {
    
    if (gelirAdı.value === '') {
        alert('Lütfen gelir adı kısmını doldurunuz.')
    } else {
        if (gelirTutar.value === '') {
            alert('Lütfen tutar kısmını doldurunuz.')
        } else if (isNaN(gelirTutar.value)) {
            alert('Lütfen tutar alanına rakam giriniz.')
        } else {
            console.log(gelirTutar.value);
            const tr = document.createElement('tr')
    
            //tarih 
            const tarihTd = document.createElement('td')
            tarihTd.textContent = tarih.value
            tr.appendChild(tarihTd)
    
            //gelir adı
            const gelirAdiTd = document.createElement('td')
            gelirAdiTd.textContent = gelirAdı.value
            tr.appendChild(gelirAdiTd)

            //gelirtutar
            const gelirTutarTd = document.createElement('td')
            gelirTutarTd.textContent = parseInt(gelirTutar.value).toLocaleString()
            tr.appendChild(gelirTutarTd)

            //çöp sepeti ikon
            const iconTd =  document.createElement('td')
            const icon = document.createElement('i')
            iconTd.appendChild(icon)
            tr.appendChild(iconTd)
            
            //çöp sepeti stil ekleme
            iconTd.classList.add('iconTd')

            icon.classList.add('fa-solid', 'fa-trash-can')
            icon.classList.add('icon')
            
            // satır silme
            icon.addEventListener('click', () => {
                tr.remove()
            })

            document.querySelector('#gelirler-bölümü tbody').appendChild(tr)

            // Yerel depolamaya ekle
            updateLocalStorage();
            
            //Gelirleri toplama

            document.querySelectorAll('#gelirler-bölümü tbody tr').forEach(satır => {
            const satırgelirTutar = (satır.querySelector('td:nth-child(3)')).textContent;
            console.log(satırgelirTutar);
            toplamGelir += parseFloat(satırgelirTutar);
        });
            console.log(toplamGelir);
            hesaplananGelir.textContent = toplamGelir.toFixed(3)

            const genelToplam = toplamGelir - toplamGider;
            document.querySelector('.hesaplanan_toplam').textContent = genelToplam.toFixed(3);

            localStorage.setItem('hesaplananToplamGelir', genelToplam)
            // Yerel depolamadan veriyi çekme

        }
    }
    
    gelirAdı.value = ''
    gelirAdı.focus()
    gelirTutar.value = ''

})

// Yerel depolamayı güncelleme işlevi
function updateLocalStorage() {
    const rows = document.querySelectorAll('#gelirler-bölümü tbody tr');
    const gelirler = [];
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const gelir = {
            tarih: cells[0].textContent,
            gelirAdi: cells[1].textContent,
            gelirTutar: cells[2].textContent
        };
        gelirler.push(gelir);
    });
    localStorage.setItem('gelirler', JSON.stringify(gelirler));
}

// Sayfa yüklendiğinde yerel depolamadan verileri yükleme
document.addEventListener('DOMContentLoaded', () => {
    const storedGelirler = JSON.parse(localStorage.getItem('gelirler'));
    if (storedGelirler) {
        storedGelirler.forEach(gelir => {
            const tr = document.createElement('tr');
            Object.values(gelir).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            const iconTd = document.createElement('td');
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-trash-can');
            icon.classList.add('icon');
            icon.addEventListener('click', () => {
                tr.remove();
                updateLocalStorage();
            });
            iconTd.appendChild(icon);
            tr.appendChild(iconTd);

            iconTd.classList.add('iconTd')

            icon.classList.add('fa-solid', 'fa-trash-can')
            icon.classList.add('icon')
            document.querySelector('#gelirler-bölümü tbody').appendChild(tr);
        });
    }

    //! GİDER EKLEME BÖLÜMÜ
// //? Takvim

const today1 = new Date().toISOString().split('T')[0]

const myDateInput1 = document.getElementById('myDate1')
myDateInput1.value = today1

//? GİDER EKLEME

const tarih_1 = document.getElementById('myDate1')
const giderAdı = document.getElementById('gider_adı')
const giderTutar = document.getElementById('gider-tutar')
const giderBtn = document.querySelector('.ekle-btn-gdr')
const hesaplananGider = document.querySelector('.hesaplanan_gider')
let toplamGider = 0


giderBtn.addEventListener('click', () => {
  
  if (giderAdı.value === '') {
      alert('Lütfen gider adı kısmını doldurunuz.')
  } else {
      if (giderTutar.value === '') {
          alert('Lütfen tutar kısmını doldurunuz.')
      } else if (isNaN(giderTutar.value)) {
          alert('Lütfen tutar alanına rakam giriniz.')
      } else {
          console.log(giderTutar.value);
          const tr = document.createElement('tr')
  
          //tarih 
          const tarihTd = document.createElement('td')
          tarihTd.textContent = tarih_1.value
          tr.appendChild(tarihTd)
  
          //gider adı
          const giderAdiTd = document.createElement('td')
          giderAdiTd.textContent = giderAdı.value
          tr.appendChild(giderAdiTd)

          //gidertutar
          const giderTutarTd = document.createElement('td')
          giderTutarTd.textContent = parseInt(giderTutar.value).toLocaleString()
          tr.appendChild(giderTutarTd)

          //çöp sepeti ikon
          const iconTd =  document.createElement('td')
          const icon = document.createElement('i')
          iconTd.appendChild(icon)
          tr.appendChild(iconTd)
          
          //çöp sepeti stil ekleme
          iconTd.classList.add('iconTd')

          icon.classList.add('fa-solid', 'fa-trash-can')
          icon.classList.add('icon')
          
          // satır silme
          icon.addEventListener('click', () => {
          tr.remove()
          })  

          document.querySelector('#giderler-bölümü tbody').appendChild(tr)

          // Yerel depolamaya ekle
          updateLocalStorage2();
          
          //Giderleri toplama

          document.querySelectorAll('#giderler-bölümü tbody tr').forEach(satır => {
              const satırgidertutar = (satır.querySelector('td:nth-child(3)')).textContent

              toplamGider += parseFloat(satırgidertutar)
          })
          // console.log(toplamGider);
          hesaplananGider.textContent = toplamGider.toFixed(3)

          const genelToplam = toplamGelir - toplamGider;
          document.querySelector('.hesaplanan_toplam').textContent = genelToplam.toFixed(3)

          localStorage.setItem('hesaplananToplamGelir', genelToplam)
          // Yerel depolamadan veriyi çekme
          let hesaplananToplamGelir = localStorage.getItem('hesaplananToplamGelir')
      }
  }
  
  giderAdı.value = ''
  giderAdı.focus()
  giderTutar.value = ''

})

// Yerel depolamayı güncelleme işlevi
function updateLocalStorage2() {
  const rows = document.querySelectorAll('#giderler-bölümü tbody tr');
  const giderler = [];
  rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const gider = {
          tarih: cells[0].textContent,
          giderAdi: cells[1].textContent,
          giderTutar: cells[2].textContent
      };
      giderler.push(gider);
  });
  localStorage.setItem('giderler', JSON.stringify(giderler));
}
});



// Sayfa yüklendiğinde yerel depolamadan verileri yükleme
document.addEventListener('DOMContentLoaded', () => {
    const storedGiderler = JSON.parse(localStorage.getItem('giderler'));
    if (storedGiderler) {
        storedGiderler.forEach(gider => {
            const tr = document.createElement('tr');
            Object.values(gider).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            const iconTd = document.createElement('td');
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', 'fa-trash-can');
            icon.classList.add('icon');
            icon.addEventListener('click', () => {
                tr.remove();
                updateLocalStorage2();
            });
            iconTd.appendChild(icon);
            tr.appendChild(iconTd);

            iconTd.classList.add('iconTd')

            icon.classList.add('fa-solid', 'fa-trash-can')
            icon.classList.add('icon')
            document.querySelector('#giderler-bölümü tbody').appendChild(tr);
        });
    }

    const hesaplananToplamGelir = localStorage.getItem('hesaplananToplamGelir');
    if (hesaplananToplamGelir) {
        // Yapmak istediğiniz işlemi burada yapabilirsiniz
        console.log("LocalStorage'dan alınan hesaplananToplamGelir: ", hesaplananToplamGelir);
    }
});






//! Gelirler Sekmesine tıklama
const gelirlerbtn = document.querySelector('.main__nav .open .nav li:nth-child(2)')
const gelirsekme = document.getElementById('gelirler-bölümü')

gelirlerbtn.addEventListener('click', () => {
    document.querySelector('.gelir-gider-dag_btn').style.display = 'none'
    gidersekme.setAttribute('class', 'gelirler_btn-none')
    gelirsekme.setAttribute('class', 'gelirler_btn-block')
})

//! Giderler Sekmesine tıklama
const giderlerbtn = document.querySelector('.main__nav .open .nav li:nth-child(3)')
const gidersekme = document.getElementById('giderler-bölümü')

giderlerbtn.addEventListener('click', () => {
    document.querySelector('.gelir-gider-dag_btn').style.display = 'none'
    gelirsekme.setAttribute('class', 'gelirler_btn-none')
    gidersekme.setAttribute('class', 'gelirler_btn-block')
})

//! anasayfa tıklama
const home = document.querySelector('.main__nav .open .nav li:nth-child(1)')
// console.log(home);

home.addEventListener('click', () => {
    document.querySelector('.gelir-gider-dag_btn').style.display = 'block'
    gelirsekme.setAttribute('class', 'gelirler_btn-none')
    gidersekme.setAttribute('class', 'gelirler_btn-none')
})


//! GRAFİK

// Grafiği güncelleyen fonksiyon
function updateChart(gelir, gider) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Gelir', 'Gider'],
        datasets: [{
          label: 'Gelir ve Gider Dağılımı',
          data: [gelir, gider],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)', // Gelir rengi
            'rgba(255, 99, 132, 0.2)'   // Gider rengi
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // Grafik ayarları buraya gelebilir
      }
    });
  }
  
  // Sayfa yüklendiğinde çalışacak kodlar
  document.addEventListener("DOMContentLoaded", () => {
    // Örnek gelir ve gider miktarları
    let gelirMiktar = 500;
    let giderMiktar = 300;
    
    // Grafiği güncelle
    updateChart(gelirMiktar, giderMiktar);
  });
  
