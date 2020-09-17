const account = {
    name: 'Thomas Goos',
    expenses: [],
    income: [],
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalExp = 0
        let totalInc = 0
        
        for (let count = 0; count < this.expenses.length; count++){
            totalExp += this.expenses[count].amount
        }
        for (let count = 0; count < this.income.length; count++){
            totalInc += this.income[count].amount
        }
        let total = totalInc - totalExp
        return `${this.name} has a balans of €${total}. €${totalInc} in income, and €${totalExp} in expenses.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> 'Thomas Goos has €1120 in expenses.'

account.addIncome('Salary', 2000)
account.addIncome('lotto', 50)
account.addExpense('Rent', 1060)
account.addExpense('Sandwich', 5)
console.log(account.getAccountSummary())

// add income array to account
// addincome method -> description, amount
// Tweak getAccountSummary