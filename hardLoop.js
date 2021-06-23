// 01 - Sum

/* let numbers = []
for(let i = 0; i <= 100; i++){
    numbers.push(Math.floor(Math.random() * 100+1))
}

console.log(numbers)

result = 0

for(let i = 0; i <= 100; i++){
    result += numbers[i]
}

console.log(result) */

// 02 - Max

/* let numbers = []
min = 50
max = 200

for(let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1) + min))  
}

console.log(numbers)
let biggestNum = 0

for(let i = 0; i < numbers.length; i++){
    if (biggestNum < numbers[i]){
        biggestNum = numbers[i]
    }
}
console.log(biggestNum) */

// 03 - Unique

/* let numbers = []
min = 50
max = 200
for (let i = 0 ; i < 50 ; i++) {
    numbers.push(Math.floor(Math.random() * (max - min +1) + min))
}

console.log(numbers)
let x = 0;
let result = 0;

while(x < numbers.length){
    if (numbers[x] >= 75 && numbers[x] <= 100){
        result = numbers[x]
        break
    }
    x++
}
console.log(result) */

// 04 - Nested Loop 

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

let splitWords = []

for (let i = 0; i < words.length ; i++) {
    splitWords.push(words[i].split(""))

}
console.log(splitWords)

let oCount = 0
let count = 0
for(let i = 0 ; i < splitWords.length; i++){
    if(splitWords[i] == "o"){
        oCount++
    }
    count++
}

console.log(oCount)
console.log(count)



