// @ts-ignore
var fs = require("fs");
var text = fs.readFileSync("./assets/day_1.txt", "utf-8") as string;
var textByLine = text.split("\n");

// Part 1
let calcValues_1: number[] = [];
textByLine.map((line) => {
  const onlyNumbers = line
    .split("")
    .map((char) => {
      if (!isNaN(parseInt(char))) {
        return parseInt(char);
      }
    })
    .filter(Boolean);

  let first = `${onlyNumbers[0]}`;
  let last = `${onlyNumbers[onlyNumbers.length - 1]}`;
  let result = "";
  if (first && !last) {
    result = first + first;
  }
  if (!first && last) {
    result = last + last;
  }
  if (first && last) {
    result = first + last;
  }

  calcValues_1 = [...calcValues_1, Number(result)];
});

const sum = calcValues_1.reduce((a, b) => a + b, 0);
console.log("Part 1: ", sum);

// Part 2
let list = text;
list = list.replaceAll("twone", "21");
list = list.replaceAll("sevenine", "79");
list = list.replaceAll("oneight", "18");
list = list.replaceAll("threeight", "38");
list = list.replaceAll("nineight", "98");
list = list.replaceAll("fiveight", "58");
list = list.replaceAll("eighthree", "83");
list = list.replaceAll("eightwo", "82");
list = list.replaceAll("one", "1");
list = list.replaceAll("two", "2");
list = list.replaceAll("three", "3");
list = list.replaceAll("four", "4");
list = list.replaceAll("five", "5");
list = list.replaceAll("six", "6");
list = list.replaceAll("seven", "7");
list = list.replaceAll("eight", "8");
list = list.replaceAll("nine", "9");
const listArr = list.split("\n");

function countNumbers(data: string[]) {
  let result = 0;
  data.forEach((item, index) => {
    let numList = [] as string[];
    item.split("").forEach((char) => {
      if (!isNaN(parseInt(char))) {
        numList.push(char);
      }
    });

    const number = parseInt(`${numList[0]}${numList[numList.length - 1]}`);
    result += number;
  });
  return result;
}

console.log("Part 2: ", countNumbers(listArr));
