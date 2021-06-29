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


var axios = require("axios");

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






