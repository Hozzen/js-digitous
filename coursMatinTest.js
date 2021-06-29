var fs = require("fs");

/* fs.stat("Hello.txt", function(err, stats){
    if(err){
        return console.error(err);
    }

    if (stats.isFile()) {
        console.log("C'est un fichier");
    }

    if (stats.isDirectory()) {
        console.log("C'est un dossier")
    }
}); */

/* fs.readFile("Hello.txt", function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
}); */

/* fs.writeFile("Hello.txt", "Hello World", function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("C'est fait")
    fs.readFile("Hello.txt", function(err, data) {
        if (err) {
            console.log("Erreur de lecture");
            return console.log(err);
        }

        console.log(data.toString());
    })
}); */