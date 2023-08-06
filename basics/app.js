// This here is raw logic of node. With Express.js we don't need to do this
// Should be easier. Express.js is a framework that makes it easier to work with node.js
const http = require("http");

const routes = require("./routes");

// You can have named function or annonymous function (arrow function)
function requestListener(req, res) {}
// We pass the requestListener function to the createServer function as reference
// We don't execute it ()
// It will be executed for every incoming request
// Because crateServer is returning a server we need to store it in variable
const server = http.createServer((routes.handler));

// Listen start a process where node.js will keep listening for incoming requests
server.listen(3000);
