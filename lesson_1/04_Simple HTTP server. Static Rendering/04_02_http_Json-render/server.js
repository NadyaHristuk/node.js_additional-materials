var http = require("http");
var fs = require("fs");

http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "aplication/json" });
    let myObj = {
      name: "petya",
      job: "Ninja",
      age: 29
    };
    response.write(JSON.stringify(myObj));
    response.end();
  })
  .listen(8000);
