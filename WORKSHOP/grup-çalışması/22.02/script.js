// //! Bir dizindeki sayıların toplamını istiyoruz ancak her bir sayıya önce 3 ekleyip sonra toplanacak. Örneğin [1,2,3] sonuç 15 olmalı.

// const numbers = [1, 2, 3];

// const result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue + 3;
// }, 0) 

// console.log(result);


//! TOPLAMA

// const numbers = [1,2,3,4,5]

// const sum = numbers.reduce((acc,cur) => acc + cur,0)

// console.log(sum) // 15


//!FİLTRELEME

// const numbers = [1,2,3,4,5]
/* -------------------------------------------------------------------------- */
//!                           filter yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers);


/* -------------------------------------------------------------------------- */
//!                           reduce yöntemi                                  */
/* -------------------------------------------------------------------------- */

// const evenNumbers = numbers.reduce((acc,number) => {
//     if(number % 2 === 0) {
//         acc.push(number)
//     }
//     return acc
// },[])

// console.log(evenNumbers);


//!NESNE OLUŞTURMA

// const numbers = [1,2,3,4,5,1,3,4,5]

// const objNumbers = numbers.reduce((acc,cur,index) => {
//     acc[`number-${index + 1}`] = cur
//     return acc
// },{})

// console.log(objNumbers);



//! Min-Max Bulma

// const numbers = [3,1,7,5,2]
/* -------------------------------------------------------------------------- */
//!                           Math.min yöntemi                                  */
/* -------------------------------------------------------------------------- */
// // const min = Math.min(...numbers)
// // console.log(min);


/* -------------------------------------------------------------------------- */
//!                           reduce yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const min = numbers.reduce((acc,cur) => Math.min(acc,cur),Infinity) //!infinity bir sayı değeridir ve sonsuzluğu temsil eder. Bu değer diğer sayılardan daha büyüktür.
// console.log(min);
// const max = numbers.reduce((acc,cur) => Math.max(acc,cur),-Infinity) //! -infinity bir sayı değeridir ve sonsuzluğu temsil eder. Bu değer diğer sayılardan daha küçüktür.
// console.log(max);


//!STRİNG BİRLEŞTİRME

// const words = ['Merhaba', 'dünya', '!']

// const sentence = words.reduce((acc,cur) => acc + ' ' + cur,'')
// console.log(sentence);

//! GRUPLAMA - NESNE DİZİSİ İŞLEMLERİ

const data = [
    {
        name: 'Alice',
        age: 30
    },
    {
        name: 'Bob',
        age: 25
    },
    {
        name: 'Charlie',
        age: 30
    },
    {
        name: 'john',
        age: 35
    },
    {
        name: 'jack',
        age: 32
    },
]

//? GRUPLAMA

// const groupAge = data.reduce((acc,person) => {
//     const age = person.age
//     if(!acc[age]){
//         acc[age] = []
//     }
//     acc[age].push(person)
//     return acc
// },{})

// console.log(groupAge);

//? Yaş toplamı bulma

// const totalAge = data.reduce((acc,person) => acc + person.age,0)
// console.log(totalAge);

//? 35 yaşından küçük kişileri filtreleme
/* -------------------------------------------------------------------------- */
//!                           filter yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const over35 = data.filter(person => person.age < 35) 
// console.log(over35);


/* -------------------------------------------------------------------------- */
//!                           reduce yöntemi                                  */
/* -------------------------------------------------------------------------- */
// const over35 = data.reduce((acc,person) => {
//     if(person.age < 35) {
//         acc.push(person)
//     }
//     return acc
// },[])

// console.log(over35);