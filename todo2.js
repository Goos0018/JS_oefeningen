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
    return index
    }

console.log(todo)
todo.splice(removeByTextValue(todo, 'sleep'),1)
console.log(todo)





/* const todo = ['learn JS', 'eat', 'sleep', 'learn more JS', 'make something cool with JS']

console.log(`You have ${todo.length} todo's`)
console.log(`The first thing you have on your list is "${todo[0]}"`)
console.log(`The second to last thing you have on your list is "${todo[todo.length -2]}"`)

// Manipulating arrays
todo.splice(2, 1)
todo.push('also drink sometimes')
todo.shift()

// ForEach excercice
console.log(`You have ${todo.length} todo's`)

let print = function(item, index){
     //console.log(index+1)
    //console.log(item)
    console.log(`${index} - ${item}`)}

todo.forEach(print)
   
// Forloop Excercice
for (let count = 0; count < todo.length; count++){
    console.log(`${count + 1} - ${todo[count]}`)
} */