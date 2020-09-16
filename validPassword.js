// isValidPassword
//length is more than 8 - and it doenst contain the word isValidPassword

let isValidPassword = function(password){
    //password = password.toLowerCase
    if(password.length < 9 || password.includes('password')){
        return false
    } else {
        return true
    }
}

console.log(isValidPassword('qsdf'))
console.log(isValidPassword('lmkjqsdfmjklsldfj'))
console.log(isValidPassword('à$^passwordmklj'))