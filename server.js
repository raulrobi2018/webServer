const express = require("express");
const app = express();
require("dotenv").config();

const hbs = require("hbs");

//Gets the port. If we publish the app in Heroku for example, the port is necessary
const port = process.env.PORT || 3000;

require("./hbs/helpers");

//Serving static content
//Here is using a middlewere that always is executed
//In this case calls the index.html in the public folder
//__dirname: it is the path where our app is installed
app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials", (err) => {
    console.log(err);
});

// Express with hbs
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    //The second param permits send data to the page.
    res.render("home", {
        name: "Raul Rodriguez",
        title: "Web Server App - Node course"
    });
});

app.get("/about", (req, res) => {
    //The second param permits send data to the page.
    res.render("about");
});

//Any other route will enter here
app.get("/*", (req, res) => {
    res.render("404");
});

/* app.get("/data", function (req, res) {
    res.send("Hello data");
}); */

app.listen(3000, () => {
    console.log(`Listening port ${port}`);
});
