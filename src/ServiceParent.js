import React, { Component } from 'react';
import ServiceChild from './ServiceChild'

class ServiceParent extends Component {
    constructor (props) {
        super(props)        // 调用父级方法
        this.state = {      // 数据对象
            inputVal: '',
            list: ['按摩', '推背', '洗脚']
        }
    }
    render() { 
        return ( 
            <div>
                <div className="form-group">
                    <label htmlFor="hello" className="col-sm-2 control-label">增加服务：</label>
                    <div className="col-sm-10">
                        <input id="hello" className="form-control" type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn btn-default" onClick={this.addList.bind(this)}>添加</button>
                    </div>
                </div>
                <div className="form-group">
                    <ul>
                        {this.state.list.map((item, index)=>{
                            return (
                                <ServiceChild key={item+index} liData={item} indexData={index} deleteItem={this.deleteList.bind(this)} requireData={'测试必填校验'} />
                            )
                            })
                        }
                    </ul>
                </div>
            </div>
         )
    }
    inputChange(e) {
        // console.log(this) // 解决this指向可以用bind
        this.setState({   // 改变绑定的值用setState改变状态
            inputVal: e.target.value
        })
    }
    // 添加li
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        })
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