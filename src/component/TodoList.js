import React from 'react';
import AddItem from './AddItem';
import '../index.css';
import classNames from 'classnames';
import Item from './Item';
import Todo from '../models/Todo';
import todosAPI from '../api/TodoResourcesAPI';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todosAPI = todosAPI;
    this.state = {
      statusOfList: Todo.ALL,
      items: []
    };
  }

  componentDidMount() {
    this.setState({
      items: this.deepCopy(this.todosAPI.filerByStatus(Todo.ALL))
    });
  }

  render() {
    return (
      <div>
        <h2>React To Do List</h2>
        <p>
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
        <br />
        {/* <AddItem getItem={this.getItem} /> */}
        <input
          className="input-text"
          onKeyUp={event => this.add(event)}
          id="todo-creator"
          ref="newItem"
        />
        <div className="button" onClick={e => this.add(e)}>
          Add
        </div>
        <br />
        <div>
          <ol>
            {(() => {
              return this.state.items.map(item => (
                <Item
                  item={item}
                  key={item.viewId}
                  toggleActiveHandler={viewId =>
                    this.toggleActiveHandler(viewId)
                  }
                  updateItemContent={(viewId, content) =>
                    this.updateItemContent(viewId, content)
                  }
                />
              ));
            })()}
          </ol>
        </div>
        <div>
          <ul className="filters">
            <li>
              <a
                href="#all"
                onClick={event => this.showFilterList(event)}
                data-filter="all"
                className={classNames({
                  selected: this.state.statusOfList === Todo.ALL
                })}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#active"
                onClick={event => this.showFilterList(event)}
                data-filter="active"
                className={classNames({
                  selected: this.state.statusOfList === Todo.ACTIVE
                })}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#complete"
                onClick={event => this.showFilterList(event)}
                data-filter="complete"
                className={classNames({
                  selected: this.state.statusOfList === Todo.ACTIVE
                })}
              >
                Complete
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // getItem = item => {
  //     let items = this.state.items;
  //     items.push(item);
  //     this.setState({ items });
  //     this.render();
  // };

  add(event) {
    if (event.keyCode === 13 || event.button === 0) {
      const inputText = this.refs.newItem.value;
      this.todosAPI.add(new Todo(inputText));
      //console.log(this.todosAPI.todos[0])
      const items = this.deepCopy(
        this.todosAPI.filerByStatus(this.state.statusOfList)
      );
      //console.log(items)
      this.setState({ items });
      this.refs.newItem.value = '';
    }
  }
  deepCopy(items) {
    return JSON.parse(JSON.stringify(items));
  }

  toggleActiveHandler(viewId) {
    // console.log(this.todosAPI.filerByStatus(this.state.statusOfList));
    this.todosAPI.toggleActive(viewId);
    const items = this.deepCopy(
      this.todosAPI.filerByStatus(this.state.statusOfList)
    );
    this.setState({ items });
  }

  updateItemContent(viewId, content) {
    this.todosAPI.updateItemContent(viewId, content);
    const items = this.deepCopy(
      this.todosAPI.filerByStatus(this.state.statusOfList)
    );
    this.setState({ items, statusOfList: this.state.statusOfList });
  }

  showFilterList(event) {
    const statusOfList = event.target.attributes.getNamedItem('data-filter')
      .value;
    console.log(this.todosAPI.filerByStatus(statusOfList));
    const items = this.deepCopy(this.todosAPI.filerByStatus(statusOfList));
    this.setState({ items, statusOfList });
  }
}
