import React, { Component } from 'react';
import ServiceChild from './ServiceChild'
import Animation from './Animation'
import './style.css'
import 'antd/dist/antd.css'
import { Form, Button } from 'antd'
import axios from 'axios'
import TestStore from './TestStore'

class ServiceParent extends Component {
    constructor (props) {
        super(props)        // 调用父级方法
        this.state = {      // 数据对象
            inputVal: '',
            list: ['按摩', '推背', '洗脚']
        }
    }
    componentWillMount () {
        console.log('componentWillMount---组件将要挂在到页面的时刻')
    }
    componentDidMount () {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        console.log('componentDidMount---组件挂载完成的时刻')
    }
    // shouldComponentUpdate (nextProps,nextState) {
    //     console.log('shouldComponentUpdate---在组件更新之前执行，要求我们返回布尔值')
    //     if(nextProps.liData !== this.props.liData){
    //         return true
    //     }else{
    //         return false
    //     }
    // }
    componentWillUpdate () {
        console.log('componentWillUpdate---在组件更新之前，在shouldComponentUpdate之后，若shouldComponentUpdate返回true执行，返回false不执行')
    }
    componentDidUpdate () {
        console.log('componentWillUpdate---组件更新完毕之后执行')
    }
    render() { 
        console.log('render---组件挂载中')
        return ( 
            <div>
                <Form>
                    <Form.Item label="增加服务：">
                        <input id="hello" className="form-control" type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)} ref={(input)=>{this.input=input}}></input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.addList.bind(this)}>添加</Button>
                    </Form.Item>
                    <Form.Item>
                    <ul ref={(ul)=>{this.ul=ul}}>
                        {this.state.list.map((item, index)=>{
                            return (
                                <ServiceChild key={item+index} liData={item} indexData={index} deleteItem={this.deleteList.bind(this)} requireData={'测试必填校验'} />
                            )
                            })
                        }
                    </ul>
                    </Form.Item>
                </Form>
                {/* <div className="form-group">
                    <label htmlFor="hello" className="col-sm-2 control-label">增加服务：</label>
                    <div className="col-sm-10">
                        <input id="hello" className="form-control" type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)} ref={(input)=>{this.input=input}}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default" onClick={this.addList.bind(this)}>添加</button>
                    </div>
                </div> */}
                {/* <div className="form-group">
                    <ul ref={(ul)=>{this.ul=ul}}>
                        {this.state.list.map((item, index)=>{
                            return (
                                <ServiceChild key={item+index} liData={item} indexData={index} deleteItem={this.deleteList.bind(this)} requireData={'测试必填校验'} />
                            )
                            })
                        }
                    </ul>
                </div> */}
                <Animation></Animation>
                <TestStore></TestStore>
            </div>
         )
    }
    inputChange(e) {
        // console.log(this) // 解决this指向可以用bind
        this.setState({   // 改变绑定的值用setState改变状态
            inputVal: this.input.value
        })
    }
    // 添加li
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        },function() {
            console.log(this.ul.querySelectorAll('li').length)
        })
        // console.log(this.ul.querySelectorAll('li').length)
    }
    // 删除li
    deleteList (index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}
 
export default ServiceParent;