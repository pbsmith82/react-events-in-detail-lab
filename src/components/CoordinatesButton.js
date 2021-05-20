// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoorinatesButton extends Component {

    state = {
        onReceiveCoordinates: this.props.onReceiveCoordinates
    }

    handleClick = (e) => {
        let x = e.clientX
        let y = e.clientY

        const array = [x,y]
        this.state.onReceiveCoordinates(array)
    }
    


    render() {
        return(
           <button onClick={this.handleClick} name="Button"> Button </button>
            
        )
    }

}