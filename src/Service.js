import React, {Component, Fragment} from 'react'

class Service extends Component {
    constructor (props) {
        super(props)        // 调用父级方法
        this.state = {      // 数据对象
            inputVal: 'hello',
            list: []
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
                        <button className="btn btn-default">添加</button>
                    </div>
                </div>
                <div className="form-group">
                    <ul>
                        <li>122</li>
                        <li>122</li>
                    </ul>
                </div>
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(this) // 解决this指向可以用bind
        this.setState({
            inputVal: e.target.value
        })
    }
}
export default Service