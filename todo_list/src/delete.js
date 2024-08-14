import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { addTaskToList } from '../src/app.js';

describe('To-Do List', function() {
    let document;
    let taskList;

    // This will run before each test case
    beforeEach(() => {
        // Create a new DOM environment
        const dom = new JSDOM('<!doctype html><html><body><ul id="tasks"></ul></body></html>');
        document = dom.window.document;
        taskList = document.getElementById('tasks');
    });

    it('should add a new task to the list', function() {
        const task = 'Buy groceries';

        const newTaskItem = addTaskToList(task, taskList);

        // Assertion to check if the task was added
        expect(taskList.children.length).to.equal(1);
        expect(taskList.children[0].textContent).to.equal(task);
    });

    it('should return the new task item element', function() {
        const task = 'Wash the car';

        const newTaskItem = addTaskToList(task, taskList);

        // Assertion to check if the returned element is correct
        expect(newTaskItem).to.be.an.instanceof(dom.window.HTMLElement);
        expect(newTaskItem.textContent).to.equal(task);
    });
});
