var fs = require("fs");
console.log("start");
var text = fs.readFileSync("./assets/day_2.txt", "utf-8") as string;
var textByLine = text.split("\n");

// 1 Rock, 2 Paper, 3 Scissors
// PLUS (0 lost, 3  draw, and 6  won)

// ENEMY: A Rock, B Paper, C Scissors
// ME: X Rock, Y Paper, Z Scissors
type Elf = "A" | "B" | "C";
type Me = "X" | "Y" | "Z";
// Rock win scissor
// Rock lose paper
// Rock draw Rock
// Paper win rock
// Paper lose rock
// Paper draw scissor
// Scissor win paper
// Scissor lose rock
// Scissor draw Scissor

console.log("### ", part1(textByLine), " ###");
console.log("### ", part2(textByLine), " ###");

function part1(textByLine: string[]) {
  let score = 0;
  textByLine.forEach((line) => {
    const [elf, me] = line.split(" ") as [Elf, Me];
    // Rock
    if (elf === "A") {
      // Rock
      if (me === "X") {
        //draw
        score = score + 1 + 3;
        return;
      }
      // Paper
      if (me === "Y") {
        // win
        score = score + 2 + 6;
        return;
      }
      // scissor
      if (me === "Z") {
        // lose
        score = score + 3 + 0;
        return;
      }
    }
    // Paper
    if (elf === "B") {
      // rock
      if (me === "X") {
        // lose
        score = score + 1 + 0;
        return;
      }
      // Paper
      if (me === "Y") {
        // draw
        score = score + 2 + 3;
        return;
      }
      // scissor
      if (me === "Z") {
        // win
        score = score + 3 + 6;
        return;
      }
    }
    // scissor
    if (elf === "C") {
      // rock
      if (me === "X") {
        //win
        score = score + 1 + 6;
        return;
      }
      // Paper
      if (me === "Y") {
        // lose
        score = score + 2 + 0;
        return;
      }
      // scissor
      if (me === "Z") {
        // draw
        score = score + 3 + 3;
        return;
      }
    }
  });
  return score;
}
// 1 Rock X, 2 Paper Y , 3 Scissors Z
// PLUS (0 lost, 3  draw, and 6  won)
function part2(textByLine: string[]) {
  let score = 0;
  textByLine.forEach((line) => {
    const [elf, me] = line.split(" ") as [Elf, Me];
    // Rock
    if (elf === "A") {
      // Scissor
      if (me === "X") {
        //lose
        score = score + 3 + 0;
        return;
      }
      // Rock
      if (me === "Y") {
        // draw
        score = score + 1 + 3;
        return;
      }
      // Paper
      if (me === "Z") {
        // win
        score = score + 2 + 6;
        return;
      }
    }
    // Paper
    if (elf === "B") {
      // Rock
      if (me === "X") {
        // lose
        score = score + 1 + 0;
        return;
      }
      // Paper
      if (me === "Y") {
        // draw
        score = score + 2 + 3;
        return;
      }
      // scissor
      if (me === "Z") {
        // win
        score = score + 3 + 6;
        return;
      }
    }
    // scissor
    if (elf === "C") {
      // Paper
      if (me === "X") {
        //lose
        score = score + 2 + 0;
        return;
      }
      // Scissor
      if (me === "Y") {
        // draw
        score = score + 3 + 3;
        return;
      }
      // Rock
      if (me === "Z") {
        // win
        score = score + 1 + 6;
        return;
      }
    }
  });
  return score;
}
