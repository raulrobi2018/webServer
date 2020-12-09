const express = require("express");
const app = express();

const hbs = require("hbs");

//Here is using a middlewere that always is executed
//In this case calls the index.html in the public folder
app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials", (err) => {
    console.log(err);
});

// Express with hbs
app.set("view engine", "hbs");

app.get("/", function (req, res) {
    //The second param permits send data to the page.
    res.render("home", {
        name: "Raul Rodriguez",
        year: new Date().getFullYear()
    });
});

app.get("/about", function (req, res) {
    //The second param permits send data to the page.
    res.render("about", {
        name: "Raul Rodriguez",
        year: new Date().getFullYear()
    });
});

/* app.get("/data", function (req, res) {
    res.send("Hello data");
}); */

app.listen(3000, () => {
    console.log("Listening port 3000");
});
