var fs = require("fs");
var text = fs.readFileSync("./assets/day_5.txt", "utf-8") as string;
var textByLine = text.split("\n");
const stacks9000 = [
  ["B", "S", "V", "Z", "G", "P", "W"],
  ["J", "V", "B", "C", "Z", "F"],
  ["V", "L", "M", "H", "N", "Z", "D", "C"],
  ["L", "D", "M", "Z", "P", "F", "J", "B"],
  ["V", "F", "C", "G", "J", "B", "Q", "H"],
  ["G", "F", "Q", "T", "S", "L", "B"],
  ["L", "G", "C", "Z", "V"],
  ["N", "L", "G"],
  ["J", "F", "H", "C"],
];
const stacks9001 = [
  ["B", "S", "V", "Z", "G", "P", "W"],
  ["J", "V", "B", "C", "Z", "F"],
  ["V", "L", "M", "H", "N", "Z", "D", "C"],
  ["L", "D", "M", "Z", "P", "F", "J", "B"],
  ["V", "F", "C", "G", "J", "B", "Q", "H"],
  ["G", "F", "Q", "T", "S", "L", "B"],
  ["L", "G", "C", "Z", "V"],
  ["N", "L", "G"],
  ["J", "F", "H", "C"],
];

for (const line of textByLine) {
  if (!line.startsWith("move")) {
    continue;
  }
  const [count, from, to] = (line.match(/(\d+)/g) ?? []).map((x) => +x);
  part1(count, from, to);
  part2(count, from, to);
}

function part1(count: number, from: number, to: number) {
  for (let index = 0; index < count; index++) {
    const item = stacks9000[from - 1].pop();
    if (item) {
      stacks9000[to - 1].push(item);
    }
  }
}

function part2(count: number, from: number, to: number) {
  const items = stacks9001[from - 1].splice(-count);
  console.log(items);

  stacks9001[to - 1].push(...items);
}

const onTopofStack_1 = stacks9000.map((x) => x[x.length - 1]);
const onTopofStack_2 = stacks9001.map((x) => x[x.length - 1]);

console.log("### ", onTopofStack_1, " ###");
console.log("### ", onTopofStack_2, " ###");

export {};
