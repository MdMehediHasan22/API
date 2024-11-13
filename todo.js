function toDoList(){
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then(res => res.json())
     .then(data => displayToDoList(data))
}

function displayToDoList(tasks){
    const toDoContainer = document.getElementById('todo-container');
    for(const task of tasks){
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        console.log(task);
        taskDiv.innerHTML = `
        <h4>UserId:${task.userId}</h4>
        <h5>TaskId:${task.id}</h5>
        <h5>TaskTitle:${task.title}</h5>
        <p>Status:${task.completed}</p>
        `;
        toDoContainer.appendChild(taskDiv);
    }
}

toDoList();