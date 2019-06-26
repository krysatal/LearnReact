import React, {Component} from 'react'
// const Component = React.component

class App extends Component {
    render () {
        return (
            <ul className="my-list">
                <li>{false ? 'hello world' : '你好！世界'}</li>
                <li>Learn JSX</li>
            </ul>
        )
    }
}

export default App