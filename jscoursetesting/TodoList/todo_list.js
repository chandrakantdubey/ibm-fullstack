// select the elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// to store the list of todos
let tasks = [];

// function to add task
function addTask() {
    // trim the values from user
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // push to task list array if it is not empty
        tasks.push({ text: taskText});
        taskInput.value = "";
        // calling the display function when task is added.
        displayTasks();
    }
}

// function to display task
function displayTasks() {
    // reset the container to empty
    taskList.innerHTML = "";
    // loop over the list of tasks and create a list item
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// function to toggle the task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// function to clear out the complete tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);