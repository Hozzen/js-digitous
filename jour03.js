/* // 01 - Array

let fruits = ["mango","lemon","blueberry"];

console.log(fruits);
console.table(fruits);

// 02 - Access

let ingredients = ["eggs","milk","butter"];

console.log(ingredients[1]);

console.log(ingredients.indexOf("butter"));

// 03 - Add and Remove

let objects = ["pen", "book","lamp"];

objects.unshift("chair");

console.log(objects);

objects.pop("lamp");

console.log(objects);

objects.push("laptop");

console.log(objects);

objects.shift("chair");

console.log(objects);

// 04 - Order 

let numbers = [4, 10, 8, 12, 6]; 

numbers.reverse();

console.log(numbers);

numbers.sort(function(a,b) {return a-b});

console.log(numbers) */


// 05 - Boucle

/* let total = 0;
let limit = 10;

for (let i = 0; i < limit; i++) {
    total += i+1;
};
console.log(total);
 */
// 06 - Reverse

/* let sentence = "Hello Konexio !";


let reversedSentence ="";
for (let i = sentence.length - 1; i >= 0; i--){
    reversedSentence += sentence[i];
}
console.log(reversedSentence)

 */
// Bonus I 

/* for (let i = 1; i <= 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz") 
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 7 === 0) {
        console.log("")
    } else {
        console.log(i)
    }
} */

// Bonus II 

/* let i = 0;
let total = 0;
let limit = 10;

while (i < limit) {
    i++;
    total += i;

};

console.log(total) */

// Bonus III 

/* let promo = ["Baydir", "Rahmad", "Amadou", "Andy", "Ange", "Artha", "Victor", "Laura", "Kévin", "Asaad", "Emran", "Anthony", "Julien", "Eliott", "Amar", "Elodie", "Yanhchen"];

let random = Math.floor(Math.random() * promo.length)

console.log(promo[random]) */

// Bonus IV

let array = []

for (let i = 1; i <= 20; i++) {
    let randomNumber = Math.floor(Math.random() * 100 +1)
    array.push(randomNumber)
}

console.log(array)

let array2 = [0]

for (let i = 0; i < array.length; i++) {
    if (array2 < array[i]) {
        array2.push(array[i]);
        array2.shift();

    }
}

console.log(array2)