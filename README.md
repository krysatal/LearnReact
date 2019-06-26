
## ReactStudy
## index.js 
    入口文件
    在入口文件引入自定义组件必须使用大写字母开头，否则会报错
## App.js
    render将要渲染的元素绑定到指定的dom
    JSX (javascript, xml) 来创建虚拟dom，不占用页面渲染机制而快速反应我们的动作，遇到<>,把语法当成html，当遇到{},把语法当javascript解析。不能用class, 要使用className。在App.js中如果不用JSX,则写成如下:
    let child1 = React.createElement('li', null, 'hello world')
    let child2 = React.createElement('li', null, 'Learn JSX')
    let ul = React.createElement('ul', {className: 'my-list'}, child1, child2)

    


