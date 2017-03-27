import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return <ul className="todo">
    {props.todoItems.map((todo, i) => <TodoItem key={i} todo={todo} onChange={props.onChange} />)}
  </ul>
}

export default TodoList;