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
