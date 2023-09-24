import './style.css'


let todoList= [];

let taskInput=document.getElementById("tasks");
let addTaskBtn=document.getElementById("addTask")
let taskList=document.getElementById("task-list")

addTaskBtn.addEventListener("click",()=> {
    let task=taskInput.Value.trim();

    if (task !== ""){
        let todoItem={
            text: task
        }
        
    todoList.push(todoItem)

    let taskradio = document.createElement('input');
    taskradio.type = 'radio';
    taskradio.name = 'todo';
    taskradio.value = 'task';

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task;

    taskList.appendChild(taskradio);
    taskList.appendChild(taskLabel);

    taskInput.value = '';
}
});