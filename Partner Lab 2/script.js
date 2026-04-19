let opener = document.getElementById("opener");
let message = document.getElementById("message");
let nameInput = document.getElementById("name");
let greetingInput = document.getElementById("greeting");
let backgroundSelect = document.getElementById("background");
let updateButton = document.getElementById("updateButton");


updateButton.addEventListener("click", function () {
    opener.textContent = "Hello " + nameInput.value + "!";
    message.textContent = greetingInput.value;
    document.body.style.backgroundColor = backgroundSelect.value;
});

function addTodo() {
    const todoInput = document.getElementById("todo");
    const task = todoInput.value.trim();

    if (task) {
        const list = document.getElementById('todoList');
        const listItem = document.createElement('li');
        listItem.textContent = task;
        list.appendChild(listItem);
        todoInput.value = '';
    } else {
        alert('Please enter a task');
    }

}



