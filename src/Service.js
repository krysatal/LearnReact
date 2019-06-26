import React, {Component, Fragment} from 'react'

class Service extends Component {
    constructor (props) {
        super(props)        // 调用父级方法
        this.state = {      // 数据对象
            inputVal: '',
            list: ['按摩', '推背', '洗脚']
        }
    }

    render () {
        return (
            <Fragment>
                <div className="form-group">
                    <label className="col-sm-2 control-label">服务</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" value={this.state.inputVal} onChange={this.inputChange.bind(this)}></input>
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
                            return <li key={index+item}>{index}:{item}</li>
                        })}
                    </ul>
                </div>
            </Fragment>
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
}
export default Service