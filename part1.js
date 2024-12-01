let left = [];
let right = [];
let totalDistance = 0;
let output = 0;

let lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

function calculate(rowNumber) {
  return Math.floor((rowNumber / 3)) - 2;
}

lineReader.on('line', function (line) {
  let leftRight = line.split("   ").map(Number);
  left.push(leftRight[0]);
  right.push(leftRight[1]);
});


lineReader.on('close', function () {
  sort();
  calculateSimilarity();
});


function sort() {
  left = left.sort();
  right = right.sort();

  console.log(left);
  console.log(right);

  for (let i = 0; i < left.length; i++) {
    let distance = Math.abs(left[i] - right[i]);
    totalDistance += distance;
  }

  console.log(totalDistance)
}

function calculateSimilarity() {
  for (let i = 0; i < left.length; i++) {
    let target = left[i];
    let countInRight = right.filter(x => x == target).length;
    output += countInRight * target;
  }

  console.log(output)
}

