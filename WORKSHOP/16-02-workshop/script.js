// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"

const isimFormatla = (ad, soyad) => 
        `${soyad[0].toUpperCase() + soyad.slice(1)}, ${ad[0].toUpperCase() + ad.slice(1)}`

        // toLocaleUpperCase('tr-TR')
console.log(isimFormatla('ahmet','yılmaz'));

// 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
// input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
// output : // Pijamali hasta, yagiz sofore cabucak guvendi.

// const charTranslate = (str) => {
//     const charTrans = {
//         'ğ': 'g',
//         'Ğ': 'G',
//         'ü': 'u',
//         'Ü': 'U',
//         'ş': 's',
//         'Ş': 'S',
//         'ı': 'i',
//         'İ': 'I',
//         'ö': 'o',
//         'Ö': 'O',
//         'ç': 'c',
//         'Ç': 'C'
//     };    
//     const translatedStr = str.split('').map(letter => {
//         for (const key in charTrans) {
//             if (key === letter) {
//                 return charTrans[key]
//             }
//         }
//         return letter
//     }).join('')

//     return translatedStr
// }

    const charTranslate = str => {
        const charTrans = {
            'ğ': 'g',
            'Ğ': 'G',
            'ü': 'u',
            'Ü': 'U',
            'ş': 's',
            'Ş': 'S',
            'ı': 'i',
            'İ': 'I',
            'ö': 'o',
            'Ö': 'O',
            'ç': 'c',
            'Ç': 'C'
        }   
        let turkceKarakterler = /[ğüşıöçĞÜŞİÖÇ]/gi;
        let result = str.replace(turkceKarakterler, match => {
            return charTrans[match] || match
        })
        return result
    }
console.log(charTranslate("Pijamalı hasta, yağız şoföre çabucak güvendi."))

// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]

const ortakEleman = (arr1,arr2) => arr1.filter(item => arr2.includes(item))

nums1 = [1, 2, 3, 4, 5]
nums2 = [3, 4, 5, 6, 7]

console.log(ortakEleman(nums1,nums2));
// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5] 1 4 9 16 25
// output : 28



// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).

const reverseArr = arr => {
    const newArr = []
    arr.forEach(item => {
        newArr.unshift(item)
    })
    return newArr
};

console.log(reverseArr([1, 2, 3, 4, 5]));
