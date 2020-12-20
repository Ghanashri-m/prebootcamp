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
  console.log(getSmallerNum(input));

  //end-here
});

const getSmallerNum = (input) => {
  let smallerNum = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < smallerNum) {
      smallerNum = input[i];
    }
  }
  return smallerNum;
}