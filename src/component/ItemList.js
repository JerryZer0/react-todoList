import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <ol>
        {this.props.items.map(item => (
          <ItemList
            addOrNot={state => {
              this.setStsate({ addOrNot: state });
              this.addItems;
            }}
            items={this.state.items}
          />
        ))}
      </ol>
    );
  }
}
