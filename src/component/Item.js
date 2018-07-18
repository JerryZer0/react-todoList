import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {}
        }
    }


    render() {
        let todo = this.state.todo
        return (
            <div>
                <button className="button" onClick={() => { this.setState({ num: this.state.num + 1 }); this.props.sum(+1) }}>+</button>
                <button className="button" onClick={() => { this.setState({ num: this.state.num - 1 }); this.props.sum(-1) }}>-</button>


                <li className={todo.checkOrNot ? "checked" : ""} ondblclick={this.ondblclick(todo.id)}>
                    <input name="done-todo" type="checkbox" className="done-todo" onchange={() => { this.checkItem(todo.id); this.props.getItem(todo) }} />
                    {todo.name}
                </li>
            </div>

        )
    }

    ondblclick(id){

    }

    checkItem(itemId){

    }
}