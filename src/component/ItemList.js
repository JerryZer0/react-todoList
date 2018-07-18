import React from 'react';
import Item from './Item';

export default class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    }



    render() {
        return (
            <ol>
                {this.props.items.map(item => (
                    <ItemList  addOrNot={(state) => {this.setStsate({addOrNot:state});this.addItems}} items={this.state.items}/>
                ))}
            </ol>
        )
    }

    ondblclick(itemid){

    }

    checkItem(itemId){
        
    }

    generateUUID() {
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }
}