import React from 'react';

function TodoItem(props) {
  const todoClass = `todo__item todo__item--${props.todo.done ? 'done' : 'open'}`;
  const attrs = {
    'type': 'checkbox',
    'name': 'filter',
    'className': 'todo__item__checkbox js_toggle_todo',
    'checked': props.todo.done
  };

  return <li className={todoClass}>
    <label>
      <input {...attrs} onChange={e => props.onChange(e, props.todo.id)} />
      <span className="todo__item__title">{props.todo.text}</span>
    </label>
  </li>
}

export default TodoItem;
