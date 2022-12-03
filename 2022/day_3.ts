import fs from "fs";

var text = fs.readFileSync("./assets/day_3.txt", "utf-8");
var textByLine = text.split("\n");

const casePrio = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("### ", part1(textByLine), " ###");
console.log("### ", part2(textByLine), " ###");

function part1(textByLine: string[]) {
  let score = 0;
  textByLine.map((line) => {
    const part1 = [...line.substring(0, line.length / 2)];
    const part2 = [...line.substring(line.length / 2)];

    part1.every((char) => {
      if (part2.includes(char)) {
        score += casePrio.indexOf(char) + 1;
        return false;
      }
      return true;
    });
  });
  return score;
}
function part2(textByLine: string[]) {
  let score = 0;

  for (let i = 0; i < textByLine.length; i += 3) {
    const l1 = textByLine[i];
    const l2 = textByLine[i + 1];
    const l3 = textByLine[i + 2];

    [...l1].every((char) => {
      if (l2.indexOf(char) !== -1 && l3.indexOf(char) !== -1) {
        score += casePrio.indexOf(char) + 1;
        return false;
      }
      return true;
    });
  }
  return score;
}
