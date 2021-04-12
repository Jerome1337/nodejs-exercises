const http = require("http");

const hostname = "localhost"; // ou "127.0.0.1"
const port = 5000;

const server = http.createServer((request, response) => {
  if (request.url === "/test") {
    response.statusCode = 201;

    response.end("BIEN CREE");

    return;
  }

  response.statusCode = 200;
  response.end("<h1>Welcome to my node server</h1>");
});

server.listen(port, hostname, (err) => {
  console.log(err);
  console.log("SERVER RUNNING");
});
