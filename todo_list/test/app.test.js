// imports
import { expect } from 'chai'; // imports assertion style from chai
import { JSDOM } from 'jsdom'; 
import { addTaskToList } from '../src/app'; // imports function from app.js

/* JSDOM is used to create a virtual DOM environment in memory, mimicking the structure and behavior of a web page's DOM
*/

describe ( 'To-Do List', function() {
  let document;
  let taskList;

  // This will run before each test case
  beforeEach( () => {

    // Create a new DOM Environment
    const dom = new JSDOM('<!doctype html><html><body><ul id="tasks"></ul></body></html>');
    document = dom.window.document;
    taskList = document.getElementById('tasks');
  });

  
})