// let fahrenheit = 32
// let celcius = (fahrenheit - 32) * 5 / 9
// let kelvin = (fahrenheit + 459.67) * 5 / 9



let getDegree = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * (5 / 9),
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}

console.log(getDegree(20))
console.log(getDegree(50).celcius)
console.log(getDegree(32).fahrenheit)
console.log(getDegree(32).kelvin)