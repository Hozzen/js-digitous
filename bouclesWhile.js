// 01 - Comptons

/* let min = 50
let max = 200
while(min <= max) {
    if(min % 2 ===0){
        console.log(min)
    }
    min++
}
 */
// 02 - Try again

/* let dice = null
let count = 0

while(dice !== 6) {
    dice = Math.floor(Math.random() * 6 +1 )
    count++
}

console.log(count) */

// 03 - Course

let ussainBolt = 0;
let tysonGay = 0;

while(ussainBolt <= 100 || tysonGay <= 100) {
    random1 = Math.floor(Math.random() * 10 +1);
    random2 = Math.floor(Math.random() * 10 +1);

    ussainBolt += random1;
    tysonGay += random2;

    let ubWin = "Ussain BOLT EST VAINQUEUR!!!"
    let tgWin = "Tyson GAY EST VAINQUEUR!!!"

    if (ussainBolt >= 100) {
        return console.log(ubWin);
    } else if (tysonGay >= 100) {
        return console.log(tgWin);
    }
    
}




// 04 - Des boites

/* 1st loop : console.log(box2) : 5
           console.log(box1) : 2

2nd loop : console.log(box2) : 5
           console.log(box1) : -8


// 05 - Encore des boites 

no loop

console.log(i) : 0 
console.log(box1) : 7 */

