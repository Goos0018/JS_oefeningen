// addIncome
// resetAccount
// getAccountSummary

// Account for ... had €... €... in income. €... in expenses.

let myAccount = {
    name: 'Thomas',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount){
    account.expenses +=amount
}

let addIncome = function (account, amount){
    account.income += amount
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account){
    console.log(`The account for ${account.name} has €${account.income - account.expenses}. €${account.income} in income. And €${account.expenses} in expenses.`)
}


addIncome(myAccount, 500)
addExpense(myAccount, 55)
addExpense(myAccount, 102)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)