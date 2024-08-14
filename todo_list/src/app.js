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

// Helper function to add tasks
export function addTaskToList(task, doc = document) { // Pass `document` as a parameter, with a default value for browser use
  const taskList = doc.getElementById("tasks"); // Use `doc` instead of `document`
  const newTaskItem = doc.createElement("li");
  newTaskItem.textContent = task;
  taskList.appendChild(newTaskItem);
  return newTaskItem; // returning the newly created task item
}

// Capture user input and add tasks
export function setupAddTaskListener(doc = document) {
  doc.getElementById("add-task").addEventListener("click", function() {
    const taskInput = doc.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      addTaskToList(taskText, doc);
      taskInput.value = "";
    }
  });
}

///////////////////////////////////
// Add Task Completion Feature
// Objective: Mark tasks as complete when clicked.
// Why: This helps you learn how to toggle styles and add/remove classes dynamically.
///////////////////////////////////
export function setupTaskCompletionListener(doc = document) {
  doc.getElementById("tasks").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
    }
  });
}

// Add the ability to remove tasks
export function setupTaskRemovalListener(doc = document) {
  doc.getElementById("tasks").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.remove();
    }
  });
}



// Update the CSS to reflect the completed state
export function applyCompletedTaskStyle(doc = document) {
  const style = doc.createElement("style"); // creates a style element saved to the variable style
style.textContent = `
  .completed {
    text-decoration: line-through;
    color: grey;
  }
`; // The textContent property of the <style> element is set to a string containing CSS rules.

doc.head.appendChild(style); // appends the <style> element to the <head> of the document
}


