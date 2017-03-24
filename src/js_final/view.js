import React from 'react';
import ReactDOM from 'react-dom';
import { addTodo, toggleTodoState, setFilter } from './actions';

let store;

export default function render(el, state, s) {
  store = store || s; // Dirty trick to get a reference to store
  ReactDOM.render(<App todos={state.todos} filter={state.filter} />, el);
  document.getElementById('todoInput').focus();
}

const App = ({ todos, filter }) => {
  let filteredTodos;

  if (filter === "SHOW_OPEN") {
    filteredTodos = todos.filter(item => !item.done);
  }
  else if (filter === "SHOW_CLOSED") {
    filteredTodos = todos.filter(item => item.done);
  }
  else {
    filteredTodos = todos;
  }

  return <div>
    <div className="todo__header">
      <Filters activeFilter={filter} />
      <Input />
    </div>
    <TodoList todoItems={filteredTodos} />
  </div>
};

function Input() {
  let input;

  return <div className="todo__input">
    <form onSubmit={
      (e) => {
        e.preventDefault();
        store.dispatch(addTodo(input.value));
        input.value = '';
        input.focus();
      }
    }>
      <input type="text" id="todoInput" className="todo__input__textfield" ref={el => input = el} />
      <button type="submit" id="addTodo">Add</button>
    </form>
  </div>
}

function TodoList({ todoItems }) {
  return <ul className="todo">
    {todoItems.map((todo, i) => <TodoItem key={i} todo={todo} />)}
  </ul>
}

function TodoItem({ todo }) {
  const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;
  const attrs = {
    'type': 'checkbox',
    'name': 'filter',
    'className': 'todo__item__checkbox js_toggle_todo',
    'checked': todo.done
  };

  return <li className={todoClass}>
    <label>
      <input {...attrs} onChange={e => store.dispatch(toggleTodoState(todo.id))} />
      <span className="todo__item__title">{todo.text}</span>
    </label>
  </li>
}

function Filters({ activeFilter }) {
  const filterItems = [
    { type: 'SHOW_ALL', title: 'Show all' },
    { type: 'SHOW_OPEN', title: 'Show open' },
    { type: 'SHOW_CLOSED', title: 'Show closed' }
  ];

  return <div className="todo__filters">
    {filterItems.map((item, i) => {
      return <FilterItem key={i} filterType={item.type} filterTitle={item.title} isActive={item.type === activeFilter} />
    })}
  </div>
}

function FilterItem({ filterType, filterTitle, isActive }) {
  const attrs = {
    'type': 'radio',
    'name': 'filter',
    'className': 'todo__filter__radio js_set_filter',
    'checked': isActive
  };

  return <label className="todo__filter">
    <input {...attrs} onChange={event => {
      store.dispatch(setFilter(filterType))
    }} />
    <span className="todo__filter__title">{filterTitle}</span>
  </label>
}
