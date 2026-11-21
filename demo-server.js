const http = require("node:http");

http
  .createServer((request, response) => {
    response.end("ready");
  })
  .listen(3000, "127.0.0.1");
