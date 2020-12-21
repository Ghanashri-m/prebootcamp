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
  input.push(...userInput.map(Number));
  
  if (input[0] % 4 === 0) {
    if (input[0] % 100 === 0) {
      if (input[0] % 400 === 0) {
        console.log('Y'); 
      } else {
        console.log('N');  
      }
    } else {
      console.log('Y');
    }
  } else {
    console.log('N');
  }
  //end-here
});
