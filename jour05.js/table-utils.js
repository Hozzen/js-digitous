const multiply = (int) => {
    for(let i = 1; i <= 10; i++) {
        console.log(int * i)
    }
}

multiply(parseInt(process.argv.slice(2)))

const addition = (int) => {
    for(let i = 1; i <= 10; i++) {
        console.log(int + i)
    }
}

addition(parseInt(process.argv.slice(2)))

module.exports = {
    multiply,
    addition,
};