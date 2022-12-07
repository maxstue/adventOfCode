var fs = require("fs");

var text = fs.readFileSync("./assets/day_7.txt", "utf-8") as string;
var textByLine = text.split("\n");

const ROOT = "/";
let folder_sizes: Record<string, number> = {};
let currentPath = [ROOT];

for (const line of textByLine) {
  const parts = line.split(" ");
  const isCommand = parts[0] === "$";
  const isCd = isCommand && parts[1] === "cd";

  // go back
  if (isCd && parts[2] === "..") {
    currentPath.pop();
  }
  // go into folder
  else if (isCd && parts[2] !== "/") {
    currentPath.push(parts[2]);
  }
  // file(s)
  else if (!isCommand && parts[0] !== "dir") {
    const size = parseInt(parts[0]);
    let tmp = [...currentPath];

    while (tmp.length > 0) {
      const key = tmp.join(".");

      // define before update
      if (!(key in folder_sizes)) {
        folder_sizes[key] = 0;
      }
      // update
      folder_sizes[key] += size;

      tmp.pop();
    }
  }
}

const smaller_than = Object.values(folder_sizes).filter((n) => n <= 100_000);
const part1 = smaller_than.reduce((acc, elem) => acc + elem, 0);

console.log("### ", part1, " ###");

const usage = folder_sizes[ROOT];
const total_size = 70000000;
const required_size = 30000000;
const min_size_to_delete = required_size + usage - total_size;

const deletion_candidates = Object.values(folder_sizes).filter(
  (n) => n >= min_size_to_delete
);
const part2 = Math.min(...deletion_candidates);
console.log("### ", part2, " ###");

export {};
