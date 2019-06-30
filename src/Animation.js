import React, { Component } from 'react';
class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow ? 'show' : 'hide'}>CSS3实现React动画</div>
                <button type="button" className="btn btn-success" onClick={this.toggleClick.bind(this)}>点击按钮</button>
            </div>
         )
    }
    toggleClick () {
        this.setState({
            isShow:this.state.isShow ? false : true
        })

    }
}
export default Animation;