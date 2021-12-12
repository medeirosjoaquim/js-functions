// this is a function without parameters (or arguments)
function printHello() {
  console.log("hello");
}

// this is a function with one parameter.
function printMessage(message) {
  // once you put a parameter, you can use it the 
  // same way as a variable in your code
  console.log("hello, " + message);
}

// We can have more than one parameter in a 
// function

function greetings (message, name) {
  console.log(message + " " + name)
}

// Now, write a function called 'add'. It should 
// receive two parameters 'a' and 'b' and it 
// will console.log the sum of both