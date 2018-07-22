import React from 'react';
import Todo from '../models/Todo';
import '../index.css';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'read'
    };
  }

  changeToEditable() {
    this.setState({
      status: 'write'
    });
  }

  updateItem(event, viewId, content) {
    if (event.keyCode === 13) {
      this.props.updateItemContent(viewId, content);
      this.setState({ status: 'read' });
    }
  }

  toggleActive(viewId) {
    //console.log(viewId);
    this.setState({ status: 'read' });
    this.props.toggleActiveHandler(viewId);
  }

  render() {
    let item = this.props.item;
    return (
      <li className={item.status}>
        {
          <input
            type="checkbox"
            className="done-todo"
            defaultChecked={item.status === Todo.COMPLETED}
            onClick={e => this.toggleActive(item.viewId)}
          />
        }

        <span onDoubleClick={event => this.changeToEditable(event)}>
          {this.state.status === 'read' ? (
            item.content
          ) : (
            <input
              autoFocus
              className="edit-input"
              defaultValue={item.content}
              onKeyUp={event =>
                this.updateItem(event, item.viewId, event.currentTarget.value)
              }
            />
          )}
        </span>
      </li>
    );
  }
}
