const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split("\n")

const T = input[0]

for ( let i = 1; i <= T; i++ ) {
    let [ R, S ] = input[i].toString().split(" ")
    let Sarr = S.toString().split("")
    let answer = ''
    for ( let i = 0; i < Sarr.length; i++ ) {
        for ( let j = 0; j < R; j++) {
            answer += Sarr[i]
        }
    }
    console.log(answer)
} 

