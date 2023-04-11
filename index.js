// selecting the input and the list item
const taskInput = document.querySelector('#taskInput');
const taskList = document.getElementById('taskList');

// add ene event listener to the form for adding new task

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault() // prevents the form from submitting and refreshing itself
    const taskText = taskInput.value; // gets the task from the input field
    if (taskText !== '') { // check the input field if it is empty
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        // clear the input field
        taskInput.value = '';
    }
});
