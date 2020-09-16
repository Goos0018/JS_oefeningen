let convertFahrenhetToCelcius = function (fahrenheitDegree) {
    let celsius = (fahrenheitDegree - 32) * 5 / 9; 
    return celsius;
}

let value1 = convertFahrenhetToCelcius(32)
let value2 = convertFahrenhetToCelcius(68)

console.log(value1)
console.log(value2)