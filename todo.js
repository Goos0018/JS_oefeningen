// create an arrau with five todo's
// you have x todo's
// print the first and second to last items -> todo: walk the dog

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

const todo = ['learn JS', 'eat', 'sleep', 'learn more JS', 'make something cool with JS']

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
}