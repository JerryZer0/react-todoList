import React from 'react';
import AddItem from './AddItem';
import '../index.css';
import classNames from 'classnames';
import Item from './Item';
import Todo from '../models/Todod';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOrNot: false,
      items: []
    };
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
        <div className="button" onClick={e => this.add()}>
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
                  toggleItemConten={(viewId, content) =>
                    this.updateItemConten(viewId, content)
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
                fate-filter="all"
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
                fate-filter="active"
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
                fate-filter="complete"
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
  add(event) {}
  //   generateUUID() {
  //     var i, random;
  //     var uuid = '';

  //     for (i = 0; i < 32; i++) {
  //       random = (Math.random() * 16) | 0;
  //       if (i === 8 || i === 12 || i === 16 || i === 20) {
  //         uuid += '-';
  //       }
  //       uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
  //         16
  //       );
  //     }
  //     return uuid;
  //   }
}
