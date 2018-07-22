import React from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';

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
        <AddItem getItem={this.getItem} />
        <br />
        <ItemList
          addOrNot={state => {
            this.setStsate({ addOrNot: state });
            this.addItems;
          }}
          items={this.state.items}
        />
      </div>
    );
  }

  getItem = item => {
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
    this.render();
  };

  generateUUID() {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = (Math.random() * 16) | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
        16
      );
    }
    return uuid;
  }
}
