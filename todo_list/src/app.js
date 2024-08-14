/*//////////////////////////////////////////////////////////////
                         USER INPUT & ADD TASKS

Objective: Use JavaScript to capture user input and add it to the list of tasks.
Why: Understanding event handling and DOM manipulation is crucial for making your web pages interactive.
//////////////////////////////////////////////////////////////*/

///////////////////////////////
// Capture user input
// Objective: Use JavaScript to capture user input and add it to the list of tasks.
// Why: Understanding event handling and DOM manipulation is crucial for making your web pages interactive.
//////////////////////////////

document.getElementById("add-task").addEventListener("click", function() { // adds event listener on button click
  const taskInput = document.getElementById("new-task"); // creates variable for new-task input field
  const taskText = taskInput.ariaValueMax.trim(); // creates variable for the input value and trims it, then saves to variable

  if (taskText !== "") { // checks to see if taskText is empty
    addTaskToList(taskText); // adds task to list if it is empty
    taskInput.value = ""; // clears the input field after adding task
  }
});

// Helper function to add tasks
function addTaskToList(task) { // task variable, passed as an argument
  const taskList = document.getElementById("task"); // creates variable & sets it to the html id 'task' 
  const newTaskItem = document.createElement("li"); // creates variable & sets it to create a new li element
  newTaskItem.textContent = task; // calls newTaskItem to retrieve it's contents & sets it to the task variable
  taskList.appendChild(newTaskItem); // appends newTaskItem to list
}

///////////////////////////////////////////
// Add the Ability to Remove Tasks
// Objective: Use JavaScript to capture user input and add it to the list of tasks.
// Why: Understanding event handling and DOM manipulation is crucial for making your web pages interactive.
///////////////////////////////////////////

document.getElementById("tasks").addEventListener("click", function(e) { // adds event listener to receive information about the target clicked
  if (e.target.tagName === "LI") { 
    /*
    This condition checks if the clicked element (e.target) is an <li> element. e.target.tagName returns the tag name of the clicked element in uppercase, so it checks if it's an 'LI'
    */
    e.target.remove(); // If the clicked element is an li then it is removed
  }
});

///////////////////////////////////
// Add Task Completion Feature
// Objective: Mark tasks as complete when clicked.
// Why: This helps you learn how to toggle styles and add/remove classes dynamically.
///////////////////////////////////

document.getElementById("tasks").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed"); // toggles the class name "completed" when clicked
  }
});

// Update the CSS to reflect the completed state
const style = document.createElement("style"); // creates a style element saved to the variable style
style.textContent = `
  .completed {
    text-decoration: line-through;
    color: grey;
  }
`; // The textContent property of the <style> element is set to a string containing CSS rules.

document.head.appendChild(style); // appends the <style> element to the <head> of the document

