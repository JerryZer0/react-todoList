import React from 'react';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" />
                <div id="button" onclick={() => { this.props.addItems(true) }}> Add</div>
            </div>

        )
    }
}