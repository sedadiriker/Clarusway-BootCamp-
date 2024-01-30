//* Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.


let devam;

do {
    let random = Math.round(Math.random() * 100);
    alert('Sayı tahmin oyununa hoş geldiniz. Hadi başlayalım!!!');

    let hak = 1;
    
    while (hak < 6) {
        let tahmin = +prompt('Sayıyı tahmin ediniz');
        if (tahmin === random) {
            devam = prompt(`Tebrikler ${hak}. hakkınızda bildiniz! Tekrar oynamak ister misiniz? (evet/hayır)`).toLowerCase();
            break;
        } else if (tahmin > random) {
            hak + 1 === 6 ? devam = prompt('Hakkınız bitti, Tekrar oynamak ister misiniz? (evet/hayır)').toLowerCase() : alert(`Aşağı inin. Kalan hakkınız ${5 - hak}`);
            
        } else if (tahmin < random) {
            hak +1 === 6 ? devam = prompt('Hakkınız bitti, Tekrar oynamak ister misiniz? (evet/hayır)').toLowerCase() : alert(`Yukarı çıkın. Kalan hakkınız ${5 - hak}`);
        }        
        hak++;
    }
} while (devam === 'evet');

if(devam === 'hayır') {
    alert('Teşekkür ederiz. Hoşçakal!');
}




