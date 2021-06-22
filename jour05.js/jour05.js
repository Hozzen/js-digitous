/* const calculate = (int1, int2, operator) => {
   if (operator === "+"){
       console.log(int1 + int2)
   } else if (operator === "-") {
       console.log(int1 - int2) 
   } else if (operator === "*" || operator === "x") {
       console.log(int1 * int2) 
   } else if (operator === "/") {
       console.log(int1 / int2)
   } else if (operator === "%") {
       console.log(int1 % int2)
   }
}

var args2 = parseInt(process.argv.slice(2))

var args3 = parseInt(process.argv[3])

var args4 = process.argv[4]

console.log(args2)
console.log(args3)
console.log(args4)

calculate(args2, args3, args4) */

// 02 - Table

/* const multiply = (int) => {
    for(let i = 1; i <= 10; i++) {
        console.log(int * i)
    }
}

multiply(parseInt(process.argv.slice(2))) */

// 03 - Separate Table


/* var {multiply, addition} = require("./table-utils.js")

console.log(multiply(parseInt(process.argv.slice(2))))

console.log(addition(parseInt(process.argv.slice(3)))) */

// 04 - Guess

var prompt = require("prompt");

prompt.start();

var min = 1
var max = 100
var mysteryNum = Math.floor(Math.random() * (max - min) + min)




const play = () => {
   prompt.get({name: "num" ,description: "Quel est le nombre mystère ?"}, function (err, res){
    res.num = parseInt(res.num)
    if(typeof res.num !== 'number' ) {
        console.log("Ce n'est pas un nombre");
        play();
    } else if (res.num < mysteryNum) {
        console.log("C'est plus!");
        play();
    } else if (res.num > mysteryNum) {
        console.log("C'est moins!");
        play();
    } else if (res.num === mysteryNum) {
        console.log("Bravo!!");
    }
   })

}

play()

