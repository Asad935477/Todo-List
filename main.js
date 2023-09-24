import 'style.css'

// Initialize an array to store todo objects
const todoList = [];

// Function to add a new todo item
function addTodo() {
  const taskInput = document.getElementById('tasks');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new todo object
    const todoItem = {
      text: taskText,
      completed: false
    };

    // Add the todo object to the array
    todoList.push(todoItem);

    // Add the todo item to the UI
    const taskList = document.getElementById('task-list');
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = taskText;

    taskList.appendChild(newTodoItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Event listener for the "ADD" button
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', addTodo);


