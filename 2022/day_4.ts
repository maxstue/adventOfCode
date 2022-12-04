var fs = require("fs");
var text = fs.readFileSync("./assets/day_4.txt", "utf-8") as string;
var textByLine = text.split("\n");

let part1_fullyOverlap = 0;
let part2_partlyOverlap = 0;
textByLine.forEach((line) => {
  const [elf1, elf2] = line.split(",");
  const [elf1_1, elf1_2] = elf1.split("-");
  const [elf2_1, elf2_2] = elf2.split("-");
  const elf1_range = getRange(+elf1_1, +elf1_2);
  const elf2_range = getRange(+elf2_1, +elf2_2);
  const result1 = compareLists_part1(elf1_range, elf2_range);
  const result2 = compareLists_part2(elf1_range, elf2_range);
  if (result1) {
    part1_fullyOverlap += 1;
  }
  if (result2) {
    part2_partlyOverlap += 1;
  }
});

console.log("### ", part1_fullyOverlap, " ###");
console.log("### ", part2_partlyOverlap, " ###");

function getRange(start: number, end: number) {
  var list: number[] = [];
  for (var i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}

function compareLists_part1(elf1list: number[], elf2List: number[]) {
  const tempList: number[] = [];
  const [biggerlist, smallerList] =
    elf1list.length > elf2List.length
      ? [elf1list, elf2List]
      : [elf2List, elf1list];
  biggerlist.forEach((i) => {
    const isInList2 = smallerList.includes(i);
    if (isInList2) {
      tempList.push(i);
    }
  });
  if (tempList.length === smallerList.length) {
    return true;
  }
  return false;
}

function compareLists_part2(elf1list: number[], elf2List: number[]) {
  const tempList: number[] = [];
  const [biggerlist, smallerList] =
    elf1list.length > elf2List.length
      ? [elf1list, elf2List]
      : [elf2List, elf1list];
  biggerlist.forEach((i) => {
    const isInList2 = smallerList.includes(i);
    if (isInList2) {
      tempList.push(i);
    }
  });
  if (tempList.length >= 1) {
    return true;
  }
  return false;
}

export {};
