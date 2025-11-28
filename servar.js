const http = require("http")

const server = http.createServer((req, res) => {
    res.write("Hello Server");
    res.end();
});
server.listen(3000, (err) => {
    if (err) {
        console.log("Error in Starting Server", err);
    }
    console.log("Server Started On port Successfully");
});


