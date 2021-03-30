import React, { Component } from 'react';

class Flower extends Component {
    state = {  }
    render() { 
        return ( <h2>This is a {this.props.color} Flower</h2> );
    }
}
 
export default Flower;