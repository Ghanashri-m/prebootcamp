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
  let inputNum = Math.round(parseFloat(userInput[0]));
  let remainder;
  if (inputNum != 0) {
    remainder = checkOddOrEven(inputNum);
    remainder == 0 ? console.log('Even') : console.log('Odd');
  } else {
    console.log('Zero');
  }
  //end-here
});

const checkOddOrEven = (inputNum) => {
  return (inputNum % 2);
}
