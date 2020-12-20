// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let circumference;
  if (parseFloat(userInput[0]) > 0) {
    circumference = 2  * Math.PI * parseFloat(userInput[0]);
    console.log(circumference.toFixed(2));
  } else {
    console.log('Error'); 
  }
  
  //end-here
});
