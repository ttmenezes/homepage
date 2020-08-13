document.getElementById('input').select();

const saveTask = () => {
    const text = document.getElementById('input').value;
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    console.log(tasks);
    tasks.push({
        text,
        completed: false
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const navBackToIndex = () => {
    saveTask();
    window.location = 'index.html';
}

document.getElementById('save').addEventListener('click', e => {
    navBackToIndex();
})

window.addEventListener('keydown', function(e) {
    e.key == 'Enter' ? navBackToIndex() : undefined;
})