const fs = require('fs');
const input = fs.readFileSync('Baekjoon/example.txt').toString().trim()

const num = Number(input)
let i = 1

while ( i <= 9 ) {
    const result = num * i
    console.log(num + " * " + i + " = " + result) 
    i++
}