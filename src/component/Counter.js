import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }


  render() {
    return (
      <div>
        <button className="button" onClick={() => { this.setState({ num: this.state.num + 1 }); this.props.sum(+1) }}>+</button>
        <button className="button" onClick={() => { this.setState({ num: this.state.num - 1 });this.props.sum(-1) }}>-</button>
        <label>&nbsp;</label>
        <label>Counter:{this.state.num}</label>
      </div>

    )
  }
}