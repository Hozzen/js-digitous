// 01 - Format

/* const formatDate = (str) => {
    let myDate = new Date(str);
    console.log(myDate.getDay(), myDate.getMonth(),  myDate.getFullYear())
}

formatDate("1990-06-23") */


// 02 - Age 

/* const calculateAge = (str) => {
    var myDate = new Date(str);
    var myAge =  2021 - myDate.getFullYear()
    console.log(`You are ${myAge} years old`)
}

calculateAge("1999-01-27") */


// 03 - Validator

var prompt = require("prompt");

prompt.start();

var emailPattern = /[@.]/gi
var userPattern = /[a-z][0-9][-]/gi
var passwordPattern = /()/gi

const checkProfile = () => {
    prompt.get({name: "mail", description: "Quel est votre email ?"},function(err, res){
        if(res.mail === emailPattern) {
            prompt.get({name: "userName", description: "Quel est votre nom d'utilisateur"},function(err, res){
                if (res.userName !== userPattern ) {
                    console.log("Le nom d'utilisateur n'est pas bon")
                } else {
                    prompt.get({name:"userPassword", description: "Saisissez un mot de passe"}, function(err, res){
                        if(typeof(res.userPassword) !== "string" || typeof(res.userPassword) !== "number" || res.userPassword === userPattern){

                        }
                    })
                }


            })
        } else {
            console.log("ça ne fonctionne pas")
        }
    })
}

checkProfile()