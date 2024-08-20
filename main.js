document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const todoInput = document.getElementById('todo-input')
    const todoText = todoInput.value.trim()

    if (todoText !== '') {
        addTodoItem(todoText)
        todoText.value = ''
    }
})

function addTodoItem(text) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.textContent = text;

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = 'Delet'
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(todoItem)
    })
    todoList.appendChild(todoItem)
    todoItem.appendChild(deleteBtn)
}