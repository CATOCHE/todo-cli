
# carlos-agenda-cli

A command line interface used to track to-do items in a software
project. Use cli to create todo items. list todo items, mark a
todo item as complete, and remove a todo item.


## Installation


## Usage


## Commands

### initialize todo List
Creates a **todo.json** file within the current directory. Use when you
wish to start a new list. If **todos.json** already exists, 'todo init' will
not do anything.

**Example**

...
carlos-agenda-cli init
...

### Add a todo item
...
carlos-agenda-cli add <some text>
...

**Example**

...
carlos-agenda-cli add feed the cat
...

### List todos

List all todos in your todo list.

...
carlos-agenda-cli ls
...

### Mark ToDo complete

Toggle a todo item as completed

...
carlos-agenda-cli check <TODO ID GOES HERE>
...

**Example**

Mark the 2nd todo item as complete or not complete if it is complete.
...
carlos-agenda-cli check 2
...

### Remove // TODO

delete a specific todo by providing the todo id.

...
carlos-agenda-cli rm <TODO ID GOES HERE>
...

**Example**

...
carlos-agenda-cli rm 1
...

## Future Features

* Show percent of todos completed
* Assign a todo to a person
* Record the data and time completed
* Export the todo itms to github as issues.
* Export to trello as a list.
