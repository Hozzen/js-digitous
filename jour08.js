var axios = require("axios");
const { join } = require("lodash");


axios
    .get("https://restcountries.eu/rest/v2/all")
    .then((res) => {
/*         console.log(res)
        console.log(res.data) */
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
    })

