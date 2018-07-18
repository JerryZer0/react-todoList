import React from 'react';

export default class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <button className="button" onClick={() => { this.setState({ num: this.state.num + 1 }) }}>+</button>
        <button className="button" onClick={() => { this.setState({ num: this.state.num - 1 }) }}>-</button>

        <label>Counter:{this.state.num}</label>
      </div>

    )
  }
}