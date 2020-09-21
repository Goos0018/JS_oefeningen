// const elements = document.querySelectorAll('p')

//  elements.forEach(function (e){
//   if(e.textContent.includes('2')){
//       e.remove()
//   }
//  })

 const todo = [{
    text: 'learn JS',
    completed: true
}, {
    text: 'eat',
    completed: false
}, {
    text: 'sleep',
    completed: true
}, {
    text : 'learn more JS',
    completed: false
}, {
    text: 'make something cool with JS',
    completed: false
}]

// You have 2 todos left (p element)
const findTodosTodo = todo.filter(function(todoItem){
    return !todoItem.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${findTodosTodo.length} todos left to do`
document.querySelector('body').appendChild(summary)

todo.forEach(function (todoItem){
    const p = document.createElement('p')
    p.textContent = todoItem.text
    document.querySelector('body').appendChild(p)
})




console.log(findTodosTodo(todo,'no'))
// Add a p for each todo above (use text value)

const newParagraph = document.createElement ('p')
newParagraph.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newParagraph)