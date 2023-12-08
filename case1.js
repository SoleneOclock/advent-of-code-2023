const { log } = require('console')
const fs = require("fs")
let dataFile = fs.readFileSync("./input1.txt").toString("utf8")

/* star 1 
const lines = dataFile.split('\n')
const result = lines.reduce((sum, line) => {
  const matches = line.match(/\d/g)
  return sum + Number(`${matches[0]}${matches[matches.length-1]}`)
}, 0);
*/

/* star 2 */
const dataTest = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
svnfdxxftkgzpjqxzkmbbcfourvfsg3two6twonezqn`
const lines2 = dataFile.split('\n')

const numbers = {
  'one' : 1,
  'two' : 2,
  'three' : 3,
  'four' : 4,
  'five' : 5,
  'six' : 6,
  'seven' : 7,
  'eight' : 8,
  'nine' : 9,
}


const numbersReverse = {}
Object.keys(numbers).forEach(k => {
  numbersReverse[k.split("").reverse().join("")] = numbers[k]
})


const result2 = lines2.reduce((sum, line) => {
  const matches = line.match(/(one|two|three|four|five|six|seven|eight|nine)|\d/gi)
  const nb1 = isNaN(matches[0]) ? numbers[matches[0]] : matches[0]

  const matchesRev = line.split("").reverse().join("").match(new RegExp(`(${Object.keys(numbersReverse).join('|')})|\\d`),'gi')
  const nb2 =  isNaN(matchesRev[0]) ? numbersReverse[matchesRev[0]] : matchesRev[0]
  return sum + Number(`${nb1}${nb2}`)
}, 0);

console.log(result2);
