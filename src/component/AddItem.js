import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <div>
        <input
          className="input-text"
          type="text"
          name="ListItem"
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
        />
        <div
          id="button"
          onClick={() => {
            this.props.getItem(this.generateItem());
          }}
        >
          {' '}
          Add
        </div>
      </div>
    );
  }

  generateItem = () => {
    let item = {
      id: this.generateUUID,
      checkOrNot: false,
      text: this.state.text
    };
    return item;
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
