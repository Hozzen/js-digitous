// 01 - File System

/* var fs = require("fs");

fs.readFile("jour07.txt", (err, data) => {
    if (err) {
        console.log(err)
        return;
    }

    console.log(data.toString())
}) */

// 02 - Map Double

/* var array = [1,2,3,4,5];

var double = array.map((num) => {
    return num * 2;
});

console.log(double) */

// 03 - Map Names

/* var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

var shortNames = longNames.map((fullName) => {
    return {
        name:`${fullName.firstName} ${fullName.lastName}`
    } ;
});

console.log(shortNames); */

// 04 - Filter Numbers

/* var array = [1,"toto",34,"javascript",8];

var numbers = array.filter((num) => typeof num === "number");

console.log(numbers) */

// 05 - Filter Even 

/* var numbers = [1,2,3,4,5,6,7,8]

var even = numbers.filter((pairs) => pairs % 2 === 0)

console.log(even) */


// 06 - Cakes

/* var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "availabe",
    },
    {
        name: "pie",
        flavor: "stawberry",
        status: "availabe",
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available",
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    }
]

var chocolateCakes = cakes.filter((chocolateCake) => chocolateCake.flavor === "chocolate")

var soldOut = chocolateCakes.map((cake) => {
    cake.status = "sold out !"
    return cake
})

console.log(soldOut) */

// Bonus 


