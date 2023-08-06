# NodeJS

To enter this **REPL** mode in Terminal just write down `node` and you can do operations like in programming.
To run Node in terminal you write `node <fileName.js>`

**R**ead -> Reading User Input
**E**val -> Evaluate User Input
**P**rint -> Print Output (Result)
**L**oop -> Wait for new input

Importing to Node:
this is module
this is looking up for global module
`const fs = require('fs')`

To import a file same thing but you need to start with path:
this is looking up for local file
`const file = require('./yourFile.js')`

This is hard coded Exit of our program/Server
`process.exit()`

## Blocking and non-Blocking code

``fs.writeFileSync`` - this is syncronus so it will block code execution untill the process is completed.

`fs.writeFile` - this is asyncronus so the code can continue, and has 3rd argument a callback function to be

executed when its done.

## Module Exporting and its System

`module.exports = requestHandler;` this is in the end of the file we want to export SINGLE EXPORT
Multiple exports

```
module.exports = {
     handler: requestHandler,
     someText: 
}
```

Explicit exports
`module.exports.handler = requestHandler;`
`module.exports.someText = "hard coded for now";`

Eventhough we have two lines of explicit export this will be still one export. It will be bundled

**Shortcut exports**
`exports.handler = requestHandler;` just exports without module

### Module system

so when we use Node Modules and we export the file let say routes to `app.js` in `app.js` we can use whatever we exported from `routes.js` but we cannot edit or do write in `routes.js` from `app.js` Because the file is cashed by Node

## Npm packages

`nodemon` - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
