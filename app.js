// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to delete a task from the list
function deleteTask(button) {
    const taskList = document.getElementById('task-list');
    const li = button.parentElement;
    taskList.removeChild(li);
}
