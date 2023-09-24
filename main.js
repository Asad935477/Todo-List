import './style.css'

// Function to create a new todo item
function createTodoItem(text) {
  // Create a new todo item element
  const todoItem = document.createElement('li');
  todoItem.textContent = text;

  // Create a "delete" button (x)
  const deleteButton = document.createElement('span');
  deleteButton.textContent = 'x';
  deleteButton.classList.add('delete-todo');

  // Add a click event listener to the "delete" button
  deleteButton.addEventListener('click', () => {
    // Remove the clicked todo item from the UI
    todoItem.parentNode.removeChild(todoItem);
  });

  // Append the "delete" button to the todo item
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// Function to add a new todo item
function addTodo() {
  const taskInput = document.getElementById('tasks');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new todo item
    const todoItem = createTodoItem(taskText);

    // Add the todo item to the UI
    const taskList = document.getElementById('task-list');
    taskList.appendChild(todoItem);

    // Clear the input field
    taskInput.value = '';
  }
}

// Event listener for the "ADD" button
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', addTodo);
