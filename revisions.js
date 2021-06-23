// 01 - Alphabet

/* const sortLetters = (str) => {
    console.log(str.split('').sort().join(''))
}

sortLetters('Konexio') */

// 02 - XOXO
/* 
const countEach = (str) => {
    if(str === "x" && str === "o") {
        console.log("Le nombres de x est de o est différent")
        console.log(false)
        return false
    } else if (str.split("x").length === str.split("o").length){
        console.log(str.split("x").length)
        console.log(str.split("o").length)
        console.log(true)
        return true
    } else {
        console.log("Vous ne pouvez utiliser que des x ou des o")
        console.log(false)
    }

}

countEach("xxxxxxoooooooo") */


// 03 - Palindrome

/* const checkPal = (str) => {
    if (str === str.split("").reverse().join("")) {
        console.log("Palindrome!")
    } else {
        console.log("Nope")
    }
}

checkPal("racecar")
checkPal("laptop") */


// 04 - Swap

/* const swap = (str) => {
    str = str.split("");
    console.log(str);
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            str[i] = str[i].toLowerCase();
        } else {
            str[i] = str[i].toUpperCase()
        }
    };
    str = str.join("")
    console.log(str)
}

swap("BoNjOur") */

// BONUS I

const makeItSpongeBob = (str) => {

}


