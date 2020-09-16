// 1 - 5 - true if correct - false if not correct

let makeGuess = function(num){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    return num == randomNum
}

console.log(makeGuess(3))
console.log(makeGuess(4))
console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(5))
console.log(makeGuess(7))