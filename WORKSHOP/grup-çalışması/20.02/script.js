//! "Sıralı bir dizi içinde (örneğin, bir dizi içinde) tekrar eden sayıları bulun ve bu tekrar eden sayıların her biri için kaç kere tekrar ettiğini hesaplayın. Sonuçları bir obje olarak döndürün."

// const numbers = [1, 2, 3, 4, 2, 5, 6, 4, 7, 8, 2, 9, 3, 3];

// const repeatNumbers = numbers.reduce((acc, number) => {
//     acc[number] = (acc[number] || 0 ) + 1
//     return acc
// },{})

// console.log(repeatNumbers);




// const repeatNumbers = {}


// for(const number of numbers) {
//     if(repeatNumbers[number]) {
//         repeatNumbers[number] += 1
//     }else {
//         repeatNumbers[number] = 1
//     }
// }

// console.log(repeatNumbers);



//! "Sıralı bir dizi içindeki her bir sayının, dizideki tüm önceki sayılarla çarpımını hesaplayın. Örneğin, [1, 2, 3, 4] dizisi için sonuç [1, 2, 6, 24] olmalıdır."

// const numbers = [1, 2, 3, 4];
// let baslangıcdegeri = 1

// const result = numbers.map((number,index,array) => {
//     baslangıcdegeri *= number
//     return baslangıcdegeri
// })

// console.log(result);

//! "Verilen bir dizideki her bir kelimenin uzunluğunu hesaplayarak bu uzunlukları içeren yeni bir dizi oluşturun." Örneğin ["merhaba", "dünya", "javascript"] sonucu [7, 5, 10] olamlı

// const words = ["merhaba", "dünya", "javascript"];

// const wordLengths = words.map(word => word.length);

// console.log(wordLengths); // [7, 5, 10]

//! "Verilen bir dizideki pozitif çift sayıların karelerini alarak bu sayıları sıralı bir şekilde büyükten küçüğe doğru listeleyin."

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers
.filter(number => number % 2 === 0)
.map(number => number ** 2)
.sort((a,b) => b - a)
