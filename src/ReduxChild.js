import React, {Component} from 'react'
import 'antd/dist/antd.css'
import { List } from 'antd'
import store from './store/index'

class ReduxChild extends Component{
    constructor(props) {
        super(props)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render() {
        return (
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={this.props.myStore.list}
                    renderItem={(item, index)=>(<List.Item onClick={this.deleteItemList.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
    storeChange(){
        this.setState(store.getState())
    }
    deleteItemList (index) {
        const action={
            type: 'delete_item_list',
            index
        }
        store.dispatch(action)
    }
}
export default ReduxChild