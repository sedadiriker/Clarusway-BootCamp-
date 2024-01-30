//! LOOPS EGZERSİZLER 

// 1 den 10 a kadar olan sayılar.

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0
while(i <= 10) {
    console.log(i);
    i++
}

// pattern oluşturma

let pattern = ''
for(let i = 0; i < 7; i++) {
    pattern += '#'
    console.log(pattern);
}


// çarpım tablosu

for(let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 0 dan 100 e kadar olan sayıarda tek ve çift sayıları yazdırma.

const evenNumbers = []
const oddNumbers = []

for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        evenNumbers.push(i)
    }else{
        oddNumbers.push(i)
    }
}

console.log(evenNumbers);
console.log(oddNumbers);


// 0 dan 100 e kadar olan sayları toplama

let sum = 0
for(let i = 0; i <= 100; i++) {
    sum += i
}

console.log(`Sayıların toplamı = ${sum}`);

// Rastgele 5 sayı ouşturma(0 ve 10 arasında)

for(let i = 0; i < 5; i++) {
    console.log(Math.round(Math.random() * 10));
}

