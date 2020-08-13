// get data from local storage
let tasks = localStorage.getItem('tasks');
tasks = tasks ? JSON.parse(tasks) : []

const removeTaskFromStorage = (taskText) => {
    tasks = tasks.filter(task => task.text != taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const renderTasks = (tasks) => {
    let taskList = document.createElement('ol');
    document.getElementById('tasks').appendChild(taskList);
    let taskEl;

    tasks.forEach(taskObj => {
        taskEl = document.createElement('li');
        taskEl.addEventListener('click', function (e) {
            removeTaskFromStorage(e.target.textContent);
            console.log(taskEl.textContent)
            taskList.removeChild(document.getElementById(e.target.id));
        })
        if (taskObj.text.length) {
            taskEl.textContent = taskObj.text.trim();
            taskEl.setAttribute('id', Math.random().toString());
            console.log(taskEl.id);
            taskList.appendChild(taskEl);
        }
    });
}

renderTasks(tasks);