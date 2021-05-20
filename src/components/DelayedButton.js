// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

    state = {
        onDelayedClick: this.props.onDelayedClick,
        timeOut: this.props.delay
    }

    handleClick = (e) => {
        e.persist();
        window.setTimeout(() => this.state.onDelayedClick(e), this.props.timeOut)
    }

    render() {
        return(
            <button onClick={this.handleClick} name="Button"> Button </button>
             
         )
    }

}