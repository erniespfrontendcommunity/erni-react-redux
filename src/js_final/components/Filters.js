import React from 'react';
import FilterItem from './FilterItem';

function Filters(props) {
  const filterItems = [
    { type: 'SHOW_ALL', title: 'Show all' },
    { type: 'SHOW_OPEN', title: 'Show open' },
    { type: 'SHOW_CLOSED', title: 'Show closed' }
  ];

  return <div className="todo__filters">
    {filterItems.map((item, i) => {
      return <FilterItem
        key={i}
        filterType={item.type}
        filterTitle={item.title}
        isActive={item.type === props.activeFilter}
        onChange={props.onChange}
      />
    })}
  </div>
}

export default Filters;
