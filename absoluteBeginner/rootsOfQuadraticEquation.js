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
  const input = [];
  input.push(...userInput[0].split(' ').map(Number));
  
  const descriminant = Math.pow(input[1], 2) - (4 * input[0] * input[2]);
  let positiveRoot = (-(input[1]) + Math.sqrt(descriminant)) / (2 * input[0]);
  let negativeRoot = (-(input[1]) - Math.sqrt(descriminant)) / (2 * input[0]);
  
  console.log(positiveRoot.toFixed(2));
  console.log(negativeRoot.toFixed(2));

  //end-here
});
