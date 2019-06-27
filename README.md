
## ReactStudy
## index.js 
    1.入口文件
    2.在入口文件引入自定义组件必须使用大写字母开头，否则会报错
## App.js
    1.render将要渲染的元素绑定到指定的dom
    2.JSX (javascript, xml) 来创建虚拟dom，不占用页面渲染机制而快速反应我们的动作，遇到    <>,把语法当成html，当遇到{},把语法当javascript解析。不能用class, 要使用            className。在App.js中如果不用JSX,则写成如下:
      let child1 = React.createElement('li', null, 'hello world')
      let child2 = React.createElement('li', null, 'Learn JSX')
      let ul = React.createElement('ul', {className: 'my-list'}, child1, child2)
## Service.js
    1.组件最外层必须包裹div，否则会报错。但有的时候我们不需要最外层包裹，比如说flex布局。这时候引入Fragment
    2.input表单绑定数据修改数据需要用setState
    3.解决方法中this指向可以在方法引用的地方用es6的方法bind(this)。
    4.循环输出数组要使用唯一的key，一般可使用如下:
      key={index+item}
    5.不能直接操作state里面的值
    6.{/* 正确使用注释 */}
    7.加html解析 dangerouslySetInnerHTML={{__html:item}}
    8.label标签for定位input框会报错。为了区别for循环，所以在label标签中要用htmlFor
## test.js
    1.代码插件simple React snippets 可以快速补齐代码
## ServiceParent.js/ServiceChild.js
    1.父组件向子组件传值：在父组件中<ServiceParent 属性名={要传递的值} />，在子组件中      <div>{this.props.属性名}</div>
    2.子组件向父组件传值：但是React有明确规定，子组件时不能操作父组件里的数据的，所以需要借助一个父组件的方法，来修改父组件的内容。在子组件ServiceChild中执行父组件的deleteList方法执行删除。删除的下标和方法需要父组件ServiceParent传递过来。
    3.可以在构造方法constructor中绑定this。
    4.单项数据流：在父组件中listData={this.state.list}传值给子组件，在子组件中的handleClick方法中this.props.listData=[]。在点击子组件的时候会报错。这就是React设置的单项数据流。意思就是list是只读的。我们只能在子组件中调用父组件的方法进行修改。
    5.子组件对父组件传递的值需要进行校验：在子组件中引入import propTypes from 'prop-types', 组件名.propTypes={
        requireData:propTypes.string.isRequired, //必传值的校验
        liData:propTypes.string,
        indexData:propTypes.number,
        deleteItem:propTypes.func
    }在JSX中引用{this.props.requireData}此时如果父组件中不传该项的值就会报错
    设置默认值：在子组件中，组件名.defaultProps={
        defaultData: '设置的默认值'
    }在JSX中引用{this.props.defaultData}
    6.使用ref进行绑定DOM：如在JSX中<input value={this.state.inputValue} ref={(index)=>{this.input=input}} onChange={this.inputChange.bind(this)} />
    在方法中 inputChange () {
        this.setState={
            inputVal: this.input.value
        }
    }
    7.ref使用中的坑：如在子组件JSX中<ul ref={(ul)=>{this.ul=ul}}>
    在方法中 addList () {
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        })
        console.log(this.ul.querySelectorAll('li').length) //此时输出的内容会少一个，是因为setState是一个异步函数所造成的
    }
    解决办法就是setState方法提供了一个回调函数，如下：
    addList () {
        this.setState({
            list: [...this.state.list, this.state.inputVal]
        },function(){
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
## React的生命周期
<img src="/public/React1901.png" />
1.Initialization:初始化阶段。
2.Mounting:DOM挂载阶段。它里边有三个小的生命周期函数。
    {
        1.componentWillMount:在组件即将被挂载到页面的时刻执行。(只执行一次)
        2.render:页面state或props发生变化时执行。(状态一旦改变就执行)
        3.componentDidMount:组件挂载完成时被执行。(只执行一次)
    }
3.Updation:组件发生改变的更新阶段。它有两个基本部分组成，一个是props属性改变，一个是state状态改变
    {
        1.shouldComponentUpdate:在组件更新之前，自动被执行。它要求返回一个布尔类型的结果，必须有返回值。就是返回true，就同意组件更新;返回false,就反对组件更新
        2.componentWillUpdate:在组件更新之前，但shouldComponenUpdate之后被执行。但是如果shouldComponentUpdate返回false，这个函数就不会被执行了。
        3.componentDidUpdate:在组件更新之后执行，它是组件更新的最后一个环节。
        4.componentWillReceiveProps:凡是组件都有生命周期函数,并且接收了props,这时候函数就可以被执行了。也就是说这个组件第一次存在于Dom中，函数是不会被执行的,如果已经存在于Dom中，函数才会被执行。
    }
4.Unmounting:DOM销毁阶段
    {
        1.componentWillUnmount:组件从页面中删除的时候执行
    }
