export function render(el, state) {
  const todoItems = state.todos.map(renderTodoItem).join('');
  el.innerHTML = renderApp(
    renderInput(),
    renderTodos(todoItems)
  );
  document.getElementById('todoInput').focus();
}

function renderApp(input, todoList) {
  return `
    <div id="app">
      <div class="todo__header">
        ${input}
      </div>
      ${todoList}
    </div>
  `;
}

function renderInput() {
  return `
    <div class="todo__input">
      <input type="text" id="todoInput" class="todo__input__textfield" >
      <button id="addTodo">Add</button>
    </div>
  `;
}

function renderTodos(todoItems) {
  return `
    <ul class="todo">
      ${todoItems}
    </ul>
  `;
}

function renderTodoItem(todo) {
  const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
  return `
    <li class="${todoClass}">
      <input type="checkbox" class="js_toggle_todo" data-id="${todo.id}"${todo.done ? ' checked' : ''} />
      ${todo.text}
    </li>
  `;
}
