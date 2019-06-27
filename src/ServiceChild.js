import React, { Component } from 'react';

class ServiceChild extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render () { 
        return ( 
            <li onClick={this.handleClick}>{this.props.liData}</li>
         )
    }
    handleClick () {
        this.props.deleteItem(this.props.indexData)
    }
}
 
export default ServiceChild;