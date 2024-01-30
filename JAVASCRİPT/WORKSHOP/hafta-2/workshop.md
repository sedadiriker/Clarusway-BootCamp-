<h1>Tuesday Workshop</h1>
<h2>Exercises</h2>

1. Reverse Words in a String Without Arrays
Write a JavaScript function called reverseWordsWithoutArray that takes a sentence as input and returns
the sentence with its words reversed, without using arrays:
This JavaScript code challenge involves reversing the words in a given sentence without using arrays. It's a
practical exercise that combines string manipulation, loops, and functions.
Expected Outputs :
For example, if the input is `Hello Js World 2023`, the function should return `2023 World Js Hello`.


```js
    function reverseWordsWithoutArray(sentence) {
        const reversedSentence = sentence.split(' ').reverse().join(' ')
        return reversedSentence
    }

    console.log(reverseWordsWithoutArray(`Hello Js World 2023`));
```


2. Write a JavaScript program that computes and prints the first n Fibonacci numbers without using any built-in functions (like Math.pow, Math.sqrt, Array methods, etc.) or arrays.
Rules:
- You must not use any built-in JavaScript functions related to Fibonacci sequences
or arrays.
- The program should prompt the user for the value of n.
- Display the first n Fibonacci numbers.
Example: For n = 7, the Fibonacci sequence would be: 0, 1, 1, 2, 3, 5, 8

```js
    let num = +prompt('Bir sayı giriniz')

function fibonacci(num){
	let before = 0;
	let accumulator = 1;
	let after = 1;

	for(let i = 0; i < num; i++){
		console.log(before)
		accumulator = before + after;
		before = after
        after = accumulator
	}
}
fibonacci(num)
```
