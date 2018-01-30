const fs = require('fs')  // File system methods (functions)

module.exports = {get: get, set: set}


// grab the contents of a file named todos.json, parse it into
// a json object and return it from function.
// is gonna live in the current directory of where our app is running.
function get () {
  return JSON.parse(fs.readFileSync('./todos.json', 'utf-8'))
}

// take the data (json object) and transform it to text and then
// write the text/json to the file system.
function set (data) {
  fs.writeFileSync('./todos.json',JSON.stringify(data))

}
