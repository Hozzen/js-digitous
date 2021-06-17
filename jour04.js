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

/* const addUp = (num) => {
    var num2 = num;
    for(let i = 0; i < num; i++) {
        num2 += i;
    }
    console.log(num2)
}

addUp(12) */

// 06 - Time 

/* const format = (num) => {
    var hours = Math.floor(num / 3600);
    var minutes = Math.floor((num - (hours * 3600)) / 60);
    var seconds = num - (hours * 3600) - (minutes * 60);
    console.log(hours + ":" + minutes + ":" + seconds)
}

format(3700) */

// Bonus 

/* const generatePassword = (num) => {
    var password = ""
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 

    for (let i = 0; i < num; i++){
        var random = Math.floor(Math.random() * letters.length);
        var randomLetter = letters[random];
        password += randomLetter;
    }

    if (num < 6 || num > 15) {
        console.log("error")
    } else {
        console.log(password.toUpperCase())
    }

    
}

generatePassword(7) */

// Bonus II 

const launchDice = (numberOfDice) => {
    var player1 = 0;
    var player2 = 0;

    for(let i = 0; i < numberOfDice; i++) {
        player1 += (Math.floor(Math.random() * 6 + 1));
        player2 += (Math.floor(Math.random() * 6 + 1));
    };

    console.log("Le joueur 1 à un score de " + player1);
    console.log(" Le joueur 2 à un score de " + player2);

    if (player1 === player2) {
        console.log("Egalitée entre les deux joueurs")
    } else if (player1 > player2) {
        console.log("Le joueur 1 l'emporte !")
    } else {
        console.log("Le joueur 2 l'emporte !")
    }
}

launchDice(5)
