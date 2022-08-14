const {RSA_NO_PADDING} = require("constants");
const http = require("http");

try {
    http.createServer((req, res) => {
        /* res.writeHead(200, {"Content-Type": "application/json"});

        let data = {
            name: "Raul",
            age: 42,
            url: req.url
        };
        res.write(JSON.stringify(data));*/

        res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
        res.writeHead(200, {"Content-Type": "application/csv"});

        res.write("id, nombre\n");
        res.write("1, Raul\n");
        res.write("2, Silvia\n");
        res.write("3, Ana\n");
        res.write("4, Ceci\n");

        res.end();
    }).listen(3000);

    console.log("Escuchando puerto 3000");
} catch (error) {
    console.log(error);
}
