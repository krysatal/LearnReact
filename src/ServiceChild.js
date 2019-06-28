import React, { Component } from 'react';
import propTypes from 'prop-types'

class ServiceChild extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    shouldComponentUpdate (nextProps,nextState) {
        console.log('shouldComponentUpdate---在组件更新之前执行，要求我们返回布尔值')
        if(nextProps.liData !== this.props.liData){
            return true
        }else{
            return false
        }
    }
    componentWillReceiveProps () {
        console.log('componentWillReceiveProps---凡是组件都有生命周期函数,并且接收了props')
    }
    componentWillUnmount () {
        console.log('componentWillUnmount---组件从页面中删除的时候执行')
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