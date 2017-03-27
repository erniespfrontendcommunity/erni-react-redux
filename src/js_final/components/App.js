import React from 'react';
import Input from './Input';
import TodoList from './TodoList';
import Filters from './Filters';
import { addTodo, toggleTodoState, setFilter } from '../actions';

const App = ({ todos, filter, store }) => {
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
      <Filters activeFilter={filter} onChange={(e, filterType) => { store.dispatch(setFilter(filterType)) }} />
      <Input onSubmit={(e, value) => { store.dispatch(addTodo(value)); }} />
    </div>
    <TodoList todoItems={filteredTodos} onChange={(e, todoId) => store.dispatch(toggleTodoState(todoId))} />
  </div>
};

export default App;
