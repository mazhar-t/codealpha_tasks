function addTask() {
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    const taskText = taskInput.value.trim();
    const taskPriority = priorityInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.textContent = taskText;
    listItem.classList.add(taskPriority);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete');
    completeButton.onclick = () => {
        listItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
}
