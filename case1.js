const { log } = require('console')
const fs = require("fs")
let dataFile = fs.readFileSync("./input1.txt").toString("utf8")

const dataTest = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

//dataFile = dataTest

const lines = dataFile.split('\n')

const result = lines.reduce((sum, line) => {
  const matches = line.match(/\d/g)
  return sum + Number(`${matches[0]}${matches[matches.length-1]}`)
}, 0);

console.log(result)