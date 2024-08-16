let input = prompt('What would you like to do?');
const todos = ['code a cool project', 'read a book'];

while ( input !== 'quit' && input !== 'q') {

  if ( input === 'list') {
    console.log('***************');

    for ( let i = 0; i < todos.length; i++ ) {
      console.log(`${i}: ${todos[i]}`);
  }

    console.log('***************');
  } else if ( input === 'new') {
    const newToDo = prompt('Ok, what is the new todo?');
    todos.push(newToDo);
    console.log(`${newToDo} added to the list`);
  } else if ( input === 'delete' ) {
    const index = prompt('Ok, enter an index to delete');
    console.log(index);
    const deleted = todos.splice(index, 1);
    console.log(`Ok, deleted ${deleted[0]}`)
  } 
  input = prompt('What would you like to do?');
}
console.log('Ok quit the app');