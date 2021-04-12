const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  response.end("RESPONSE");
});

server.listen(3000, "localhost", () => {
  console.log("SERVER STARTED");
});
