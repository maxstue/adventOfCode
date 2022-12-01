var fs = require("fs");
console.log("start");
var text = fs.readFileSync("./assets/day_1.1.txt", "utf-8") as string;
var textByLine = text.split("\n\n");

let highest = 0;
const calcValues: number[] = [];
textByLine.map((line) => {
  const values = line.split("\n");

  let calc = 0;
  values.forEach((i) => {
    calc += +i;
  });
  calcValues.push(calc);

  if (calc > highest) {
    highest = calc;
  }
});

calcValues.sort((a, b) => b - a);

const topthree = calcValues.slice(0, 3).reduce((p, c) => p + c);
console.log(topthree);

console.log("### ", highest, " ###");
