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
  console.log(getTriangleArea(parseFloat(userInput[0])).toFixed(2));
  //end-here
});

const getTriangleArea = (inputNum) => {
  let area = (Math.sqrt(3) * Math.pow(inputNum, 2)) / 4;
  return area;
}
