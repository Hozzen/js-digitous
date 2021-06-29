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

var axios = require("axios");

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

catchPokemon(9)

// Feels better to succeed.. guess i could've been faster tho, i hope i'll remember all i've done.



