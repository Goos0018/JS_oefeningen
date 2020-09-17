const account = {
    name: 'Thomas Goos',
    expenses: [],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let total = 0
        for (let count = 0; count < this.expenses.length; count++){
            total += this.expenses[count].amount
        }
        return `${this.name} has €${total} in expenses.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> 'Thomas Goos has €1120 in expenses.'

account.addExpense('Rent', 1060)
account.addExpense('Sandwich', 5)
console.log(account.getAccountSummary())


//////////:::::////////////////////////////////////////
// // addIncome
// // resetAccount
// // getAccountSummary

// // Account for ... had €... €... in income. €... in expenses.

// let myAccount = {
//     name: 'Thomas',
//     expenses: 0,
//     income: 0
// }

// let addExpense = function (account, amount){
//     account.expenses +=amount
// }

// let addIncome = function (account, amount){
//     account.income += amount
// }

// let resetAccount = function (account){
//     account.expenses = 0
//     account.income = 0
// }

// let getAccountSummary = function(account){
//     console.log(`The account for ${account.name} has €${account.income - account.expenses}. €${account.income} in income. And €${account.expenses} in expenses.`)
// }


// addIncome(myAccount, 500)
// addExpense(myAccount, 55)
// addExpense(myAccount, 102)
// getAccountSummary(myAccount)
// resetAccount(myAccount)
// getAccountSummary(myAccount)