// 01 - Countries 

/* var axios = require("axios");
const { join } = require("lodash");


axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((res) => {
        // console.log(res)
        // console.log(res.data)
        var countriesNames = [];
        var data = res.data;

        data.forEach((country) => {
            // console.log(country.name)
            countriesNames.push(country.name)
        })

        

        console.log(countriesNames.join("-"))
    })
    .catch((err) => {
        console.log(err);
    }) */


// 02 - Chuck Norris 


/* var axios = require("axios");

const getFact = () => {
    axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => {
            // console.log(res);
            data = res.data;

            // randomNum = Math.floor(Math.random() * data.value.length +1 ) 

            console.log(data.value)

            // for(let i = 0; i < data.value.length; i++) {

            // }
        })
        .catch((err) => {
            console.log(err);
        })
};

getFact()
 */

// Je laisse mes erreurs pour me souvenir de ma bêtise


/* var axios = require("axios");

const catchPokemon = () => {
    axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
        .then((res) => {
            // console.log(res.data)
            var data = res.data.results
            // console.log(data)
            data.forEach((pokemon, num) => {
                
                console.log(`
                id : ${num + 1}
                name : ${pokemon.name}
                `)
            })

        })
        .catch((err) => {
            console.log(err)
        })
}

catchPokemon() */

// Feels bad to be an idiot... Let's try again

/* var axios = require("axios");

const catchPokemon = (id) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
            // console.log(res.data.name)
            var data = res.data.name
            console.log(`
            id : ${id}
            name : ${data}
            `)
        })
        .catch((err) =>  {
            console.log(err)
        })
}

catchPokemon(9) */


// Feels better to succeed.. guess i could've been faster tho, i hope i'll remember all i've done.


// Bonus - Black Jack


/* const { random } = require("colors")
var prompt = require("prompt")
prompt.start()

var min = 16
var max = 21


// console.log(bank)
// console.log(randomCard)


const blackJack = () => {

    var bankScore = 0;
    var playerScore = 0;
    var bankCard = Math.floor(Math.random() * (max - min +1 ) + min);
    var randomCard = Math.floor(Math.random() * 10 +1);

    playerScore += randomCard;

    console.log(`Le joueur pioche un ${playerScore}`)
    prompt.get({name: "choice" ,description: "Tapez 1 pour piocher 2 pour vous coucher"}, function(err, res) {

        if (res.choice === 1) {
            playerScore += randomCard;
            console.log(`Le joueur pioche un ${randomCard}`);
            console.log(`Le joueur est a ${playerScore}`);
        } else if (res.choice === 2) {
            bankScore += bankCard;
            console.log(`Le croupier à ${bankScore}`)
        } else {
            console.log("Vous n'avez pas tapé 1 ni 2 !!")
        }
        if (err) {
            return onErr(err);
        }
    });
} */

/* var prompt = require("prompt")
prompt.start()

const blackJack = () => {
    var playerScore = 0;

    for (let i = 0; i <= 21; i + playerScore){
        var randomCard = Math.floor(Math.random() * 10 +1);
        prompt.get({name: "choice" ,description: "Tapez a pour piocher b pour vous coucher"}, function(err, res){
            if (res.choice === "a") {
                playerScore += randomCard;
                console.log(`Le joueur pioche un ${randomCard}`);
                console.log(`Le joueur est a ${playerScore}`);
            } else {
                console.log("Bizarre bizarre")
            }

            if (err) {
                return onErr(err)
            }
        })
    }

    if (playerScore < 21) {
        console.log("Le joueur à bust")
    }
} */


blackJack()





