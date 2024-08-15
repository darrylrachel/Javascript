import { expect } from 'chai'; // imports assertion style from chai
import { JSDOM } from 'jsdom';
import * as app from '../src/app.js'; // imports function from app.js

/* JSDOM is used to create a virtual DOM environment in memory, mimicking the structure and behavior of a web page's DOM
*/

describe('To-Do List', function() {
  let document;
  let taskList;

  // This will run before each test case
  beforeEach(() => {

    // Create a new DOM Environment
    const dom = new JSDOM('<!doctype html><html><body><ul id="tasks"></ul></body></html>');
    document = dom.window.document;
    taskList = document.getElementById('tasks');
    app.applyCompletedTaskStyle(document); // Use `app.applyCompletedTaskStyle` to access the function
  });

  it('should add a new task to the list', function() {
    const task = 'Buy groceries';

    const newTaskItem = app.addTaskToList(task, document); // Use `app.addTaskToList`

    // Assertion to check if the task was added
    expect(taskList.children.length).to.equal(1);
    expect(taskList.children[0].textContent).to.equal(task);
  });

  it('should return the new task item element', function() {
    const task = 'Wash the car';

    const newTaskItem = app.addTaskToList(task, document);

    expect(newTaskItem).to.be.an.instanceof(document.defaultView.HTMLElement);
    expect(newTaskItem.textContent).to.equal(task);
  });

  it('should apply the completed task style', function() {
    // applyCompletedTaskStyle(document);
    const task = 'Finish the report';
    const newTaskItem = app.addTaskToList(task, document); // Use `app.addTaskToList`

    const style = document.querySelector('style');
    expect(style).to.not.be.null;
    expect(style.textContent).to.include('.completed');

  });
});

