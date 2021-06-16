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

let sentence = "Hello Konexio !";

function reverse(str) {
    let reversed ="";
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
};

reverse(sentence)