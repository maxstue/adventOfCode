const fs = require("fs");
let list = fs.readFileSync("./assets/day_1.txt", "utf8");

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
list = list.split("\n");

function countNumbers(data) {
  let result = 0;
  data.forEach((item, index) => {
    let numList = [];
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

console.log(countNumbers(list));
