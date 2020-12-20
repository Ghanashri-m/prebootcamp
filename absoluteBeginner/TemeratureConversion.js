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
  let inputNum = parseFloat(userInput[0]);
  let temperature = convertDegreeToFaahrenheit(inputNum);
  console.log(temperature.toFixed(2));
  //end-here
});

const convertDegreeToFaahrenheit = (inputNum) => {
  return ((inputNum * (9/5)) + 32);
}
