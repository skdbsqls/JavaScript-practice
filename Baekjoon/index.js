const fs = require('fs');
const array = fs.readFileSync('Baekjoon/example.txt').toString().trim().split("\n").map((x)=>Number(x))

let Max = 0

for (let i = 1; i < array.length; i++) {
    if ( array[Max] < array[i])
    Max = i
} 
console.log(array[Max])
console.log(Max+1)
console.log(array[Max].toString() + "\n" + (Max+1).toString())