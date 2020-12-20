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
  inputNum.push(...userInput.map(Number));
  console.log(getGreatest(inputNum));
  //end-here
});

const getGreatest = (inputNum) => {
  let greater = inputNum[0];
  for (let i = 0; i < inputNum.length; i++) {
    if (inputNum[i] > greater) {
      greater = inputNum[i];
    }
  }
  return(greater);
}
