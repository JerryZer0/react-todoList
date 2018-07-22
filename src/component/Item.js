import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todo = this.props.todo;
    return (
      <div>
        <li
          className={todo.checkOrNot ? 'checked' : ''}
          onDoubleClick={this.ondblclick(todo.id)}
        >
          <input
            name="done-todo"
            type="checkbox"
            className="done-todo"
            onchange={() => {
              this.checkItem(todo.id);
              this.props.getItem(todo);
            }}
          />
          {todo.text}
        </li>
      </div>
    );
  }

  ondblclick(id) {}

  checkItem(itemId) {}
}
