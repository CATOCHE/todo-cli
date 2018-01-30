const store = require('../lib/store')
const { map, join, compose, filter, propEq, add, reduce } = require('ramda')

module.exports = render

const list = compose(join('\n'), map(li))

const remaining=compose(reduce(add(1),0),filter(propEq('completed',false)))

function li(todo){
  return `    [${todo.completed ? 'X': ' '}] - ${todo.id} ${todo.text}`
}

function render(){
    const todos = store.get()

    return `
    My To Do List
    -----------------------------------
${list(todos)}
    -----------------------------------
    ${remaining(todos)} remaining
`
}
