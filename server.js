const express = require("express");
const app = express();

//Here is using a middlewere that always is executed
//In this case calls the index.html in the public folder
app.use(express.static(__dirname + "/public"));

/* app.get("/", function (req, res) {
    let data = {
        name: "Raul",
        age: 42,
        url: req.url
    };
    res.send(data);
}); */

/* app.get("/data", function (req, res) {
    res.send("Hello data");
}); */

app.listen(3000, () => {
    console.log("Listening port 3000");
});
