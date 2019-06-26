
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
## Service.js
    组件最外层必须包裹div，否则会报错。但有的时候我们不需要最外层包裹，比如说flex布局。这时候引入Fragment
    input表单绑定数据修改数据需要用setState
    解决方法中this指向可以在方法引用的地方用es6的方法bind(this)。
    循环输出数组要使用唯一的key，一般可使用如下:
    key={index+item}
    


