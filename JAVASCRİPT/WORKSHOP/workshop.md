<h1>Tuesday Workshop</h1>
<h2>Exercises</h2>

1. Get Season
   Create a program that determines the season based on the month and day entered by the user. (Do not use loops or functions) :
   Take month and day from the user.

Season conditions:
Spring: February 21 - May 31 // 21 şubat - Mart-Nisan-Mayıs
Summer: June 1 - September 21 // Haziran- Temmuz-Ağustos - 21 Eylül
Fall: September 22 - December 20 // 22 Eylül- Ekim- Kasım - 20 Aralık
Winter: December 21 - February 20 // 21 Aralık - Ocak - 20 Şubat

Inputs should 1-12 for month and 1-31 for day. If it is outside these values, an error message should be displayed on the console.

    ```js
    const month = Number(prompt('Enter a month (1-12):'));
    const day = Number(prompt('Enter a day (1-31):'));

    const isValidMonth = month >= 1 && month <= 12;
    const isValidDay = day >= 1 && day <= 31;

    if (!isValidMonth || !isValidDay) {
        console.log('Invalid month or day. Please enter valid values.');
    } else {
    let season;

    if ((month === 2 && day >= 21) || (month >= 3 && month <= 5)) {
        season = 'Spring'; // 21 şubat - Mart-Nisan-Mayıs
    } else if ((month >= 6 && month <= 8) || (month === 9 && day <= 21)) {
        season = 'Summer'; // Haziran- Temmuz-Ağustos - 21 Eylül
    } else if ((month === 10 || month === 11) || (month === 12 && day <= 20) || (month === 9 && day >= 22)) {
        season = 'Fall'; // 22 Eylül- Ekim- Kasım - 20 Aralık
    } else {
        season = 'Winter'; // 21 Aralık - Ocak - 20 Şubat
    }

    console.log(`The season for ${month}/${day} is ${season}.`);
    }
    ```

2. Leap Year Checker :
Write a JavaScript program that checks if a given year is a leap year. Leap years have a special property where they have an extra day, February 29th. The program uses conditional statements to determine whether the input year is a leap year or not. (Do not use loops or functions)
Your program checks for leap years based on the following conditions:

If the year is divisible by 4 and not divisible by 100, it's a leap year.
If the year is divisible by 400, it's a leap year.

    ```js
    const year = +prompt('Enter year');

    const isLeapYear =
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0);
    if (isLeapYear) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
    ```
