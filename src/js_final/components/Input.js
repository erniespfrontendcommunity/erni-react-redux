import React from 'react';

class Input extends React.Component {

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return <div className="todo__input">
      <form onSubmit={
        (e) => {
          e.preventDefault();
          this.props.onSubmit(e, this.input.value);
          this.input.value = '';
          this.input.focus();
        }
      }>
        <input type="text" id="todoInput" className="todo__input__textfield" ref={el => this.input = el} />
        <button type="submit" id="addTodo">Add</button>
      </form>
    </div>
  }
}

export default Input;
