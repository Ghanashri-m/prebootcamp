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
  const alt = [];
  let sum = 0;
  alt.push(...userInput.map(Number));
  for (let i = 0; i < alt.length; i++) {
    sum += alt[i] 
  }
  console.log(sum.toFixed(1));
  //end-here
});
