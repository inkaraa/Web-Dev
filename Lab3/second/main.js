function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task === '') {
        alert('Task cannot be empty');
        return;
    }

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        todoItem.classList.toggle('done');
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        todoList.removeChild(todoItem);
    };

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
    input.value = '';
}