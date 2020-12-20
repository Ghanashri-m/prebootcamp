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
  const inputNum = [];
  inputNum.push(...userInput[0].split(' ').map(Number));
  console.log(getSimpleInterest(inputNum).toFixed(2));
  //end-here
});

const getSimpleInterest = (inputNum) => {
  let priciple = inputNum[0];
  let interest = inputNum[1];
  let time = inputNum[2];
  let simpleInterest = (priciple * time * interest) / 100;
  return(simpleInterest);
}
