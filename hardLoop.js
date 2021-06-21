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

let numbers = []
min = 50
max = 200

for(let i = 0; i < 50; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1) + min))  
}

console.log(numbers)
biggestNum = 0

for(let i = 0; i < numbers.length; i++){
    if (biggestNum < numbers[i]){
        biggestNum = numbers[i]
    }
}
console.log(biggestNum)