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
  let input = parseInt(userInput[0]);
  input === 0 ? console.log('NULL') : console.log(...getMultiples(input));

  //end-here
});

const getMultiples = (num) => {
  let multiples = [];
  for (let i = 1; i <= num; i++) {
    multiples.push(9 * i);
  }
  return multiples;
}
