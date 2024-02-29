//! Bir restoranın menüsünü temsil eden bir JavaScript nesnesi oluşturun. Bu nesne, menüdeki yemeklerin adlarını özellikler olarak içermelidir. Ayrıca, her yemeğin fiyatını döndüren bir metodu da içermelidir. Oluşturduğunuz bu nesneyi kullanarak, menüdeki bir yemeğin adını almak ve fiyatını öğrenmek için nasıl bir JavaScript kodu yazarsınız?


// const menu = {
//     "Köfte": 25,
//     "Izgara Tavuk": 30,
//     "Mantar Sote": 20,
//     "Patlıcan Kebabı": 28,
//     "Mercimek Çorbası": 15
//   };
  

//   menu.fiyatAl = function(yemek) {
//     return `${yemek}:${this[yemek]}` || "Bu yemek menüde yok!"
//   }

  
//   console.log(menu.fiyatAl('Mantar Sote'));

//! Bir şirketin çalışanlarını temsil eden bir JavaScript uygulaması yapmanız isteniyor. Her çalışanın adı, departmanı ve maaşı bilgilerini içeren bir nesne dizisi oluşturun. Ardından, şirket içindeki departmanlara göre çalışanların maaş ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, departman adını parametre olarak alacak ve ilgili departmandaki çalışanların maaş ortalamasını döndürecek. Eğer belirtilen departmanda çalışan yoksa, "Belirtilen departmanda çalışan bulunamadı!" mesajını döndürün. Örneğin:

  // function departmanMaasOrtalamasi(departman) {
  //   // Kodunuzu buraya yazın
  // }
  
  // // Örnek kullanım:



//!Cevap

// const calisanlar = [
//     { ad: "Ali", departman: "Muhasebe", maas: 4000 },
//     { ad: "Ayşe", departman: "İnsan Kaynakları", maas: 6000 },
//     { ad: "Fatma", departman: "Muhasebe", maas: 4500 },
//     { ad: "Mehmet", departman: "Satış", maas: 5500 },
//     { ad: "Ahmet", departman: "İnsan Kaynakları", maas: 5000 }
//   ];


//   function departmanMaasOrtalamasi(departmanAdı) {
//     const departmanlar = calisanlar.reduce((acc, calisan) => {
//         if (calisan.departman === departmanAdı) {
//             if (!acc[calisan.departman]) {
//                 acc[calisan.departman] = { totalMaas: 0, calisanSayisi: 0 }
//             }
//             acc[calisan.departman].totalMaas += calisan.maas
//             acc[calisan.departman].calisanSayisi++
//         }
//         return acc;
//     }, {})
//     // console.log(departmanlar);
//     if (departmanlar[departmanAdı]) {
//         const ortalamaMaas = departmanlar[departmanAdı].totalMaas / departmanlar[departmanAdı].calisanSayisi
//         return ortalamaMaas
//     } else {
//         return "Belirtilen departmana ait çalışan bulunamadı."
//     }
// }

//   console.log(departmanMaasOrtalamasi("Muhasebe")); // Beklenen çıktı: 4250
//   console.log(departmanMaasOrtalamasi("Satış")); // Beklenen çıktı: 5500
//   console.log(departmanMaasOrtalamasi("Bilgi Teknolojileri")); // Beklenen çıktı: Belirtilen departmanda çalışan bulunamadı!







//? Chatgbpt cevabı
  // function departmanMaasOrtalamasi(departman) {
  //   var calisanSayisi = 0;
  //   var toplamMaas = 0;
    
  //   for (var i = 0; i < calisanlar.length; i++) {
  //     if (calisanlar[i].departman === departman) {
  //       calisanSayisi++;
  //       toplamMaas += calisanlar[i].maas;
  //     }
  //   }
    
  //   if (calisanSayisi === 0) {
  //     return "Belirtilen departmanda çalışan bulunamadı!";
  //   } else {
  //     return toplamMaas / calisanSayisi;
  //   }
  // }
  
  // console.log(departmanMaasOrtalamasi("Muhasebe")); // Beklenen çıktı: 4250
  // console.log(departmanMaasOrtalamasi("Satış")); // Beklenen çıktı: 5500
  // console.log(departmanMaasOrtalamasi("Bilgi Teknolojileri")); // Beklenen çıktı: Belirtilen departmanda çalışan bulunamadı!

//! Bir online öğrenci takip sistemi geliştiriyorsunuz. Her öğrencinin adı, sınıfı ve aldığı dersler bilgilerini içeren bir öğrenci nesnesi oluşturun. Ayrıca, her dersin adı, öğretmeni ve öğrencilere verilen notlar bilgilerini içeren bir ders nesnesi oluşturun.

// 1. Öğrencilerin derslere kaydolmasını sağlayan bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını ve kaydolmak istediği dersleri almalıdır.
// 2. Bir öğrencinin aldığı notları görüntüleyen bir fonksiyon yazın. Bu fonksiyon, öğrencinin adını almalı ve aldığı dersler ile bu derslerde aldığı notları listelemelidir.
// 3. Bir dersin öğrencilerinin not ortalamasını hesaplayan bir fonksiyon yazın. Bu fonksiyon, dersin adını almalı ve bu derse kayıtlı öğrencilerin not ortalamasını döndürmelidir.

// Bu özellikleri gerçekleştiren bir JavaScript programı yazın.


// Öğrenci ve ders nesneleri oluşturulması
// var ogrenciler = [
//     { ad: "Ali", sinif: 10, dersler: [] },
//     { ad: "Ayşe", sinif: 11, dersler: [] },
//     { ad: "Fatma", sinif: 10, dersler: [] }
//   ];
  
//   var dersler = [
//     { ad: "Matematik", ogretmen: "Ahmet Hoca", notlar: {} },
//     { ad: "Fizik", ogretmen: "Mehmet Hoca", notlar: {} },
//     { ad: "Kimya", ogretmen: "Ayşe Hoca", notlar: {} }
//   ];
  
//   // Öğrencinin derslere kaydolmasını sağlayan fonksiyon
//   function derslereKaydol(ogrenciAdi, ...dersAdlari) {
//     var ogrenci = ogrenciler.find(function(ogrenci) {
//       return ogrenci.ad === ogrenciAdi;
//     });
  
//     if (ogrenci) {
//       dersAdlari.forEach(function(dersAdi) {
//         var ders = dersler.find(function(ders) {
//           return ders.ad === dersAdi;
//         });
  
//         if (ders) {
//           ogrenci.dersler.push(dersAdi);
//         } else {
//           console.log(dersAdi + " adlı ders bulunamadı.");
//         }
//       });
//       console.log(ogrenciAdi + " derslere kaydoldu.");
//     } else {
//       console.log(ogrenciAdi + " adlı öğrenci bulunamadı.");
//     }
//   }
  
//   // Öğrencinin aldığı notları görüntülemeyi sağlayan fonksiyon
//   function notlariGoruntule(ogrenciAdi) {
//     var ogrenci = ogrenciler.find(function(ogrenci) {
//       return ogrenci.ad === ogrenciAdi;
//     });
  
//     if (ogrenci) {
//       console.log(ogrenciAdi + " adlı öğrencinin notları:");
//       ogrenci.dersler.forEach(function(dersAdi) {
//         var not = dersler.find(function(ders) {
//           return ders.ad === dersAdi;
//         }).notlar[ogrenciAdi] || "Not girilmemiş";
//         console.log(dersAdi + ": " + not);
//       });
//     } else {
//       console.log(ogrenciAdi + " adlı öğrenci bulunamadı.");
//     }
//   }
  
//   // Dersin öğrencilerinin not ortalamasını hesaplayan fonksiyon
//   function notOrtalamasiHesapla(dersAdi) {
//     var ders = dersler.find(function(ders) {
//       return ders.ad === dersAdi;
//     });
  
//     if (ders) {
//       var notlar = Object.values(ders.notlar);
//       if (notlar.length > 0) {
//         var toplamNot = notlar.reduce(function(toplam, not) {
//           return toplam + not;
//         }, 0);
//         var ortalama = toplamNot / notlar.length;
//         console.log(dersAdi + " dersinin not ortalaması: " + ortalama.toFixed(2));
//       } else {
//         console.log(dersAdi + " dersine kayıtlı öğrenci bulunmamaktadır.");
//       }
//     } else {
//       console.log(dersAdi + " adlı ders bulunamadı.");
//     }
//   }
  
//   // Örnek kullanım senaryosu
//   derslereKaydol("Ali", "Matematik", "Fizik");
//   derslereKaydol("Ayşe", "Matematik", "Kimya");
//   derslereKaydol("Fatma", "Fizik");
  
//   notlariGoruntule("Ali");
//   notlariGoruntule("Ayşe");
//   notlariGoruntule("Fatma");
  
//   derslereKaydol("Ahmet", "Tarih"); // Öğrenci bulunamadı
//   derslereKaydol("Fatma", "Tarih"); // Ders bulunamadı
  
//   notOrtalamasiHesapla("Matematik");
//   notOrtalamasiHesapla("Fizik");
//   notOrtalamasiHesapla("Kimya");
  