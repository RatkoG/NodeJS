const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write(
      `<body>
            <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>
            </form></body>
        `
    );
    res.write("</html>");
    // returning here will stop the execution of the function, so it doen't go to the next res.write
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    // event listener doesn't execute emidiately. It will be executed when the event happens
    req.on("data", (chunk) => {
      // chunk is a buffer: <Buffer 6d 65 73 73 61 67 65 3d 61 73 64 61 73 64>
      console.log(chunk);
      body.push(chunk);
    });
    // event listener doesn't execute emidiately. It will be executed when the event happens
    return req.on("end", () => {
      // Here we have all the chunks and we buffer them. BUS STOP!!!
      // Buffer.concat(body) will concatenate all the chunks into one buffer
      // Here is string because we know it is a string. If it was a file we would need to know the type
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
      // this here is async code. Callback function will be executed when the file is created
      fs.writeFile("message.txt", message, () => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  // console.log(req.url, req.method, req.headers, req.statusCode)
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  // Once you end the response you can't write to it anymore
  res.end();
  // If you write after end you will get an error

}

module.exports = {
    handler: requestHandler,
    someText: "hard coded for now"
}