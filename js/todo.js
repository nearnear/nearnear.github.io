const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");
const maxLengthOfList = 20;

const TODOS_KEY = "todos"

const savedTodos = localStorage.getItem(TODOS_KEY);

let todos = [];

if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(paintTodo)
    todos = parsedTodos;
}

function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    li.classList.add("list-item")
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.textContent = "✖︎";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);

    li.appendChild(span);
    todoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos(todos);
    li.remove();
}

function handleTodoSubmit(event){
    event.preventDefault();
    
    if (todoList.children.length < maxLengthOfList) {
        const newTodoObj = {"id": Date.now(), "text": todoInput.value};
        todos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveTodos(todos);
        todoInput.value = "";
    } else {
        alert("최대 항목 개수를 초과했습니다.")
    }
}

todoForm.addEventListener("submit", handleTodoSubmit);

