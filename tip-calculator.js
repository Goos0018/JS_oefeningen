// total, tipPercent .2

let calculateTip = function(total = null, tipPercent = .2){
    let tip = total * tipPercent;
    let newTotal = total + tip;
    //return "the tip is $ " + tip + ", your total is $ " + newTotal;
    return `the tip is $${tip}, your total is now $${newTotal}`;
}

console.log(calculateTip(100,))
console.log(calculateTip(100,.5))
console.log(calculateTip(undefined))
console.log(calculateTip(250,.11))
