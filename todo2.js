// Convert array to array of objects -> text, completed
// create function to remove a todo by text value

const todo = [{
    text: 'learn JS',
    completed: 'yes'
}, {
    text: 'eat',
    completed: 'yes'
}, {
    text: 'sleep',
    completed: 'yes'
}, {
    text : 'learn more JS',
    completed: 'no'
}, {
    text: 'make something cool with JS',
    completed: 'no'
}]

const removeByTextValue = function (todolist, todoText) {
    const index = todolist.findIndex(function (todoItem){
        return todoItem.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){ // added this line after seeing his solution
        return index
    }
    }

console.log(todo)
todo.splice(removeByTextValue(todo, 'sleep'),1)
console.log(todo)

///////////////////////////////////////////
//Filter Excercise
///////////////////:///////////////////////

const findTodos = function (todoList, query) {
    return todoList.filter(function(todoItem){
    //const isTextMatch = todoItem.text.toLowerCase().includes(query.toLowerCase())
    const isCompletedMatch = todoItem.completed.toLowerCase().includes(query.toLowerCase())
    return /*isTextMatch ||*/ isCompletedMatch
})
}


console.log(findTodos(todo,'no'))