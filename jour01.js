/* // 01 - Hello world

console.log("Hello world!"); */

// 02 - String

/* var test = "My name is Kévin"

console.log(test)

 */

// 03 - Concatenation

/* var name = "Kévin"

console.log("Nice to meet you " + name) */

// console.log(`Nice to meet you ${name}`)

/* 04 - String length

var testLength = "I'm very long !"

console.log(testLength.length)
 */

// 05 - Replace

/* var food = "croissant is meh"

console.log(food.replace("meh", "so good")) */

// 06 - Up and down

/* var basic = "This is Cool"
var basicUp = basic.toUpperCase()
var basicDown = basic.toLowerCase()

console.log(basic, basicUp, basicDown) */


// 07 - Split

/* var word = "bannana"
var letters = word.split("");

console.log(letters) */

// 08 - template

/* var age = 22

var template = "i'm" + ` ${age} ` + "years old"

var template = `i'm ${age} years old`

console.log(template) */

// JUST FOR FUN

/* let sentence = "Bonjour"

const changeSentence = () => {
    let amusement = sentence.split("");
    for (let i = 0; i < amusement.length ; i++) {
        if (amusement[i] === "B") {
            amusement.splice(0, 1, "A")
        }
        if (amusement[i] === "o") {
            amusement.splice(1,1,"u")
        }
        if (amusement[i] === "n") {
            amusement.splice(2,1,"r")
        }
        if (amusement[i] === "j") {
            amusement.splice(3,1,"e")
        }
        if (amusement[i] !== "euuuh" ) {
            amusement.splice(4,1,"v")
        }
        if (amusement[i] !== "c'est pas mal avec des !== en fait ") {
            amusement.splice(5,1,"o")
        }
        if (amusement[i] === "r") {
            amusement.splice(6,1,"ir!")
        }
    }
    amusement = amusement.join('')
    console.log(amusement)

};

console.log(sentence)
changeSentence() */
let toxicRain = 50

let iceNova = 500

let lastHope = 9999999

class Archer {
    constructor(name, age, bow, quiver, lifePoint) {
        this.name = name;
        this.age = age;
        this.bow = bow;
        this.quiver = quiver;
        this.lifePoint = lifePoint
    }

    displayInfo(){
        return `${this.name} is a young archer, he is ${this.age}. He is used to kill his enemies with his bow named ${this.bow} and he keep his arrow is his quiver ${this.quiver} !`
    }

    attackEnemy(){
        return `${this.name} attaque l'ennemie avec son ${this.bow} !! Il utilise le sort Toxic Rain!
        Le ${iceGolem.name} subit ${toxicRain} points de dégats`;

    }

    attackLastHope(){
        iceGolem.health = iceGolem.health - lastHope
        return `${hozzen.name} utilise toutes ses ressources pour attaquer avec son Last Hope !!! le ${iceGolem.name} subit ${lastHope} points de dégats ! ${iceGolem.monsterHealth()}`

    }

};

class Monster{
    constructor(name, health, attack){
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    monsterEvent(){
        return `Un ${this.name} Attaque ${hozzen.name} il a ${this.health} HP!`
    }

    monsterHealth(){
        return `Il reste ${this.health} HP au ${this.name}`
    }

    monsterTakeDamage(){
        this.health = this.health - toxicRain
        return `${this.name} à subit des dégats il lui reste ${this.health} HP !`;

    }

    monsterAttack(){
        hozzen.lifePoint = hozzen.lifePoint - 500
        return `${this.name} attaque ${hozzen.name} avec ${this.attack} !! ${hozzen.name} subit ${iceNova} points de dégats..
        Il reste ${hozzen.lifePoint} points de vie à ${hozzen.name}.`
    }
}

let hozzen = new Archer ("Hozzen", 14, "Kraken Slayer", "bottomless hole", 1000);

console.log(hozzen.displayInfo())

let iceGolem = new Monster("Ice Golem", 500, "Ice Nova")

console.log(iceGolem.monsterEvent())

console.log(hozzen.attackEnemy())

console.log(iceGolem.monsterTakeDamage())

console.log(iceGolem.monsterAttack())
console.log(hozzen.attackLastHope())