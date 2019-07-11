import React, {Component} from 'react'
import {List} from 'antd'
import store from './store/index'

class TestStore extends Component{
    constructor(props){
        super(props)
        this.myStore = store.getState()
    }
    render() {
        return (
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    //关键代码-----------start
                    dataSource={this.myStore.list}
                    //关键代码-----------end
                    renderItem={item=>(<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}
export default TestStore
