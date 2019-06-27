import React, { Component } from 'react';
import propTypes from 'prop-types'

class ServiceChild extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render () { 
        return ( 
            <li onClick={this.handleClick}>{this.props.defaultData}-{this.props.requireData}-{this.props.liData}</li>
         )
    }
    handleClick () {
        this.props.deleteItem(this.props.indexData)
    }
}
    ServiceChild.propTypes={
        requireData:propTypes.string.isRequired,
        liData:propTypes.string,
        indexData:propTypes.number,
        deleteItem:propTypes.func
    }
    ServiceChild.defaultProps={
        defaultData: '设置默认值'
    }
export default ServiceChild;