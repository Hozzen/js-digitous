// 01 - Object

/* let cat = {
    name : "Garfield",
    age : 3,
    isCute : true,
}

console.log(cat)

// 02 - Combine

let cat2 = {
    name : "Gaston",
    age : 4,
    isCute : false,
}

let cats = [cat, cat2]

console.log(cats[0].age)

console.log(cats[1].isCute) */

// 03 - Even

/* const checkIfEven = (num) => {
    if (num % 2 === 0) {
        console.log("even")
    }   else {
        console.log("odd")
    }
}

checkIfEven(2)
checkIfEven(5)
checkIfEven(39009)

// 04 - Compare

const compare = (num1, num2) => {
    if (num1 > num2) {
        console.log("num 1 is bigger")
    } else if (num2 > num1) {
        console.log("num2 is bigger")
    } else {
        console.log("Both are the same")
    }
}

compare(239847,2374)

compare(4,4)

compare(237,2394) */

// 05 - Add Up

const addUp = (num) => {
    var num2 = num;
    for(let i = 0; i < num; i++) {
        num2 += i;
    }
    console.log(num2)
}

addUp(12)