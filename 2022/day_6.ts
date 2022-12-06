var fs = require("fs");
console.log("start");
var text = fs.readFileSync("./assets/day_6.txt", "utf-8") as string;
var textByLine = text.split("").filter((e) => e !== "");

function checkPacket(lengthOfPacket: number) {
    let solution: number[] = []
    let packet = lengthOfPacket
    for (let i = packet; i < textByLine.length + packet; i++) {
        let arr:string[] = []
        for (let j = 0; j < packet; j++) {
            arr.push(textByLine[i - j]);
        }
        console.log(arr);
        
        for (let x = 1; x <= packet; x++) {
            let checkThis = arr.pop() as string

            if (arr.includes(checkThis)) break  //if the array includes it break
            else arr.unshift(checkThis) // if not add it back to beggining and repeat check
            if (x === packet) solution.push(i + 1) // if it makes it to end of check, add the index + 1 to solution
        }
    }
    return solution.shift()  // pull the first occurance out for solution
}
console.log("### ", checkPacket(4), " ###");
console.log("### ", checkPacket(14), " ###");

export {};
