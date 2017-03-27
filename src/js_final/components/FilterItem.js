import React from 'react';

function FilterItem(props) {
  const attrs = {
    'type': 'radio',
    'name': 'filter',
    'className': 'todo__filter__radio js_set_filter',
    'checked': props.isActive
  };

  return <label className="todo__filter">
    <input {...attrs} onChange={e => { props.onChange(e, props.filterType) }} />
    <span className="todo__filter__title">{props.filterTitle}</span>
  </label>
}

export default FilterItem;
