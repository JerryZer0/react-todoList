import React from 'react';
import Counter from './Counter';

export default class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }

    }
    
    generateCoounter() {
        return (
            <Counter sum={(getNum)=> { this.setState({num:(getNum+this.state.num)}) }} />
        )
    }

    render() {

        return (
            <div>{
                [...Array(this.props.number)].map(() => { return this.generateCoounter() })
            }
                <hr />
                <label>Summery:{this.state.num}</label>
            </div>

        )
    }
}