//!Bir online alışveriş uygulaması geliştiriyorsunuz ve kullanıcıların sepetlerini temsil eden bir JavaScript programı yazmanız isteniyor. Her ürünün adı, fiyatı ve stok durumu bilgilerini içeren bir ürün nesnesi oluşturun. Kullanıcılar, bu ürünleri sepetlerine ekleyebilmeli ve sepetlerindeki toplam tutarı görebilmelidir. Ayrıca, kullanıcılar bir ürünü sepetten çıkartabilmeli ve stok durumu güncellenmelidir.

// İşte bir örnek kullanım senaryosu:
// 1. Kullanıcı, ürünleri sepetine ekler.
// 2. Sepetteki toplam tutarı görür.
// 3. Kullanıcı, bir ürünü sepetten çıkarır.
// 4. Sepetteki toplam tutarı güncellenir.
// 5. Kullanıcıya kalan stok sayısı gösterilir.

// Bu özellikleri gerçekleştiren bir JavaScript programı yazın.

// Nesne oluşturma
const urunler = [
    { ad: "Kalem", fiyat: 5, stok: 10 },
    { ad: "Defter", fiyat: 10, stok: 20 },
    { ad: "Silgi", fiyat: 2, stok: 15 }
  ]
  
  // Kullanıcı sepeti
  const sepet = {
    urunler: [],
    toplamTutar: 0,
    urunEkle: function(urunAdi) {
      const urun = urunler.find(item => {
        return item.ad === urunAdi
      })
  
      if (urun && urun.stok > 0) {
        this.urunler.push(urun)
        this.toplamTutar += urun.fiyat
        urun.stok--
        console.log(urunAdi + " sepete eklendi.")
        console.log("Toplam tutar: " + this.toplamTutar)
        console.log("Kalan stok: " + urun.stok)
      } else {
        console.log("Üzgünüz, " + urunAdi + " stokta yok veya yeterli stok bulunmamaktadır.");
      }
    },
    urunCikar: function(urunAdi) {
      const index = this.urunler.findIndex(item => { // ilk öğenin index ini döndür,yoksa -1 döndürür
        return item.ad === urunAdi;
      });
  
      if (index !== -1) {
        const urun = this.urunler[index]
        this.urunler.splice(index, 1)
        this.toplamTutar -= urun.fiyat
        urun.stok++
        console.log(urunAdi + " sepetten çıkarıldı.");
        console.log("Toplam tutar: " + this.toplamTutar);
        console.log("Kalan stok: " + urun.stok);
      } else {
        console.log("Üzgünüz, " + urunAdi + " sepetinizde bulunmamaktadır.");
      }
    }
  };
  

  sepet.urunEkle("Kalem");
  sepet.urunEkle("Defter");
  sepet.urunEkle("Silgi");
  sepet.urunEkle("Defter");
  sepet.urunCikar("Kalem");


//! Bir kütüphane uygulaması yazmanız isteniyor. Bu uygulama, kitapları, yazarları ve kütüphanedeki mevcut kopya sayılarını yönetmek için bir JavaScript programı olacak.

// 1. Her kitabın adı, yazarı ve mevcut kopya sayısı bilgilerini içeren bir kitap nesnesi oluşturun.
// 2. Kullanıcılar, kütüphanedeki kitapları listelemeli, yeni kitap eklemeli, var olan kitapların kopya sayısını artırmalı veya azaltmalıdır.
// 3. Kullanıcılar, bir kitabın adını vererek kütüphaneden kopya alabilmeli veya bir kopyayı iade edebilmelidir.
// 4. Kullanıcılar, belirli bir yazarın kitaplarını listeleme yeteneğine sahip olmalıdır.

// Bu özellikleri gerçekleştiren bir JavaScript programı yazın.

// Kitap nesnesi
const kitaplar = [
  { ad: "Kürk Mantolu Madonna", yazar: "Sabahattin Ali", kopyaSayisi: 3 },
  { ad: "1984", yazar: "George Orwell", kopyaSayisi: 2 },
  { ad: "Sefiller", yazar: "Victor Hugo", kopyaSayisi: 4 },
  { ad: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", kopyaSayisi: 5 },
  { ad: "Yabancı", yazar: "Albert Camus", kopyaSayisi: 3 }
]



// 2. Kütüphanedeki kitapları listeleme
function kitaplariListele() {
  kitaplar.forEach(kitap => {
    console.log(`${kitap.ad} - ${kitap.yazar} - Kopya Sayısı: ${kitap.kopyaSayisi}`);
  })
}

// 2. Yeni kitap ekleme
function kitapEkle(ad, yazar, kopyaSayisi) {
  kitaplar.push({ ad: ad, yazar: yazar, kopyaSayisi: kopyaSayisi });
  console.log(`${ad} kitabı kütüphaneye eklendi.`);
}

// 2. Var olan kitapların kopya sayısını artırma
function kopyaSayisiArtir(ad, artisMiktari) {
  const kitap = kitaplar.find(kitap => kitap.ad === ad)
  if (kitap) {
    kitap.kopyaSayisi += artisMiktari
    console.log(`${ad} kitabının kopya sayısı ${artisMiktari} artırıldı. Yeni kopya sayısı: ${kitap.kopyaSayisi}`)
  } else {
    console.log(`${ad} adında bir kitap bulunamadı.`)
  }
}

// 2. Var olan kitapların kopya sayısını azaltma
function kopyaSayisiAzalt(ad, azalisMiktari) {
  const kitap = kitaplar.find(kitap => kitap.ad === ad)
  if (kitap) {
    if (kitap.kopyaSayisi >= azalisMiktari) {
      kitap.kopyaSayisi -= azalisMiktari
      console.log(`${ad} kitabının kopya sayısı ${azalisMiktari} azaltıldı. Yeni kopya sayısı: ${kitap.kopyaSayisi}`)
    } else {
      console.log("İstenen miktarda kopya bulunmamaktadır.")
    }
  } else {
    console.log(`${ad} adında bir kitap bulunamadı.`)
  }
}

// 3. Kütüphaneden kopya alabilme
function kopyaAl(ad) {
  const kitap = kitaplar.find(kitap => kitap.ad === ad)
  if (kitap) {
    if (kitap.kopyaSayisi > 0) {
      kitap.kopyaSayisi--
      console.log(`${ad} kitabı kütüphaneden alındı. Kalan kopya sayısı: ${kitap.kopyaSayisi}`);
    } else {
      console.log("Bu kitaptan stokta kalmamıştır.")
    }
  } else {
    console.log(`${ad} adında bir kitap bulunamadı.`)
  }
}

// 3. Kütüphaneye kopya iade etme
function kopyaIade(ad) {
  const kitap = kitaplar.find(kitap => kitap.ad === ad)
  if (kitap) {
    kitap.kopyaSayisi++
    console.log(`${ad} kitabı kütüphaneye iade edildi. Yeni kopya sayısı: ${kitap.kopyaSayisi}`)
  } else {
    console.log(`${ad} adında bir kitap bulunamadı.`)
  }
}

// 4. Belirli bir yazarın kitaplarını listeleme
function yazarKitaplariListele(yazar) {
  const yazarKitaplari = kitaplar.filter(kitap => kitap.yazar === yazar);
  if (yazarKitaplari.length > 0) {
    yazarKitaplari.forEach(kitap => {
      console.log(`${kitap.ad}`)
    });
  } else {
    console.log("Bu yazarın kütüphanede kitabı bulunmamaktadır.");
  }
}

// Örnek kullanım:
kitaplariListele();
kitapEkle("Yüzüklerin Efendisi", "J.R.R. Tolkien", 5);
kopyaSayisiArtir("1984", 3);
kopyaSayisiAzalt("Kürk Mantolu Madonna", 2);
kopyaAl("Yabancı");
kopyaIade("Sefiller");
yazarKitaplariListele("Sabahattin Ali");