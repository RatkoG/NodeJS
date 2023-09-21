const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid arguments");
};

try {
  console.log(sum(1));
} catch (error) {
  console.log("Error occured!");
  console.log(error);
}

// If we run the file without handling the error we throw. The app will crash.
// To handle the error we can use try catch block.
// otherwide we won't be able to see the THIS WORKS!!! message.
console.log("THIS WORKS!!!");
