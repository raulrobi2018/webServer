const {RSA_NO_PADDING} = require("constants");
const http = require("http");

try {
    http.createServer((req, res) => {
        res.writeHead(200, {"Content-Type": "application/json"});

        let data = {
            name: "Raul",
            age: 42,
            url: req.url
        };
        res.write(JSON.stringify(data));
        res.end();
    }).listen(3000);

    console.log("Escuchando puerto 3000");
} catch (error) {
    console.log(error);
}
