import React, { PureComponent, createRef } from 'react';

//不能在函数组件上使用ref属性,因为没有实例

class Counter extends PureComponent{
  constructor(props) {
    super(props)
  
    this.state = {
      counter:0
    }

  }
  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={(e)=>this.increment()}>+1</button>
      </div>
    )
  }
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
  
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.CounterRef = createRef();
    this.titleEL = null;
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* ref=字符串/对象/函数 */}
        {/* 1.字符串方式 */}
        <h2 ref="titleRef">hello React</h2>
        {/* 目前推荐的方式 2.对象方式*/}
        <h2 ref={this.titleRef}>hello React</h2>
        {/* 3.函数方式 */}
        <h2 ref={(arg) => (this.titleEL = arg)}>hello React</h2>

        <button onClick={(e) => this.changeText()}>改变文本</button>
        <Counter ref={this.CounterRef}/>
        <button onClick={e=>this.add()}>App按钮</button>
      </div>
    );
  }
  changeText() {
    //第一种方式
    console.log(this.titleRef.current);
    //第二种方式
    this.titleRef.current.innerHTML = 'hello';
    //第三种方式
    // this.titleEL.innerHTML='hello El'
  }
  add(){
    this.CounterRef.current.increment();
  }
}
