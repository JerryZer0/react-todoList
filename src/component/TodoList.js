import React from 'react';
import AddItem from './AddItem';
import ItemList from './ItemList';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addOrNot: false,
            items: []
        }
    }
    render() {
        return (
            <div>
                <h2>React To Do List</h2>
                <p><em>Simple Todo List with adding and filter by diff status.</em></p>
                <br />
                <AddItem addItems={(state) => { this.setStsate({ addOrNot: state }); this.addItems }} />
                <br />
                <ItemList addOrNot={(state) => { this.setStsate({ addOrNot: state }); this.addItems }} items={this.state.items} />
            </div>


        )
    }
}