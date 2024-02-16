    <h1 align='center>Workshop Solutions</h1>

1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?

   ```js
   const isimFormatla = (ad, soyad) =>
     `${soyad[0].toUpperCase() + soyad.slice(1)}, ${
       ad[0].toUpperCase() + ad.slice(1)
     }`;

   console.log(isimFormatla("ahmet", "yılmaz"));
   ```

2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?

   ```js
   const charTranslate = (str) => {
     const charTrans = {
       ğ: "g",
       Ğ: "G",
       ü: "u",
       Ü: "U",
       ş: "s",
       Ş: "S",
       ı: "i",
       İ: "I",
       ö: "o",
       Ö: "O",
       ç: "c",
       Ç: "C",
     };
     const translatedStr = str
       .split("")
       .map((letter) => {
         for (const key in charTrans) {
           if (key === letter) {
             return charTrans[key];
           }
         }
         return letter;
       })
       .join("");

     return translatedStr;
   };
   console.log(charTranslate("Pijamalı hasta, yağız şoföre çabucak güvendi."));
   ```

   ```js
   const charTranslate = (str) => {
     const charTrans = {
       ğ: "g",
       Ğ: "G",
       ü: "u",
       Ü: "U",
       ş: "s",
       Ş: "S",
       ı: "i",
       İ: "I",
       ö: "o",
       Ö: "O",
       ç: "c",
       Ç: "C",
     };
     let turkceKarakterler = /[ğüşıöçĞÜŞİÖÇ]/gi;
     let result = str.replace(turkceKarakterler, (match) => {
       return charTrans[match] || match;
     });
     return result;
   };
   console.log(charTranslate("Pijamalı hasta, yağız şoföre çabucak güvendi."));
   ```

3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

   ```js
   const ortakEleman = (arr1, arr2) =>
     arr1.filter((item) => arr2.includes(item));
   nums1 = [1, 2, 3, 4, 5];
   nums2 = [3, 4, 5, 6, 7];
   console.log(ortakEleman(nums1, nums2));
   ```

5. oru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
   ```js
   const reverseArr = arr => {
    const newArr = []
    arr.forEach(item => {
        newArr.unshift(item)
    })
    return newArr
    };
    console.log(reverseArr([1, 2, 3, 4, 5]));
   ```
