import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input, Button} from 'antd'
import store from './store'
import ReduxChild from './ReduxChild'
class ReduxParent extends Component{
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() {
        return (
            <div style={{margin: '10px'}}>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        style={{width: '250px', marginRight: '10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.addItemList.bind(this)}>增加</Button>
                </div>
                <div>
                    <ReduxChild myStore={ this.state }></ReduxChild>
                </div>
            </div>
        )
    }
    storeChange(){
        this.setState(store.getState())
    }
    changeInputValue(e) {
        const action= {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }
    addItemList() {
        const action = {
            type: 'add_item_list',
        }
        store.dispatch(action)
    }
}
export default ReduxParent
