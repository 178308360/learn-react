import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"nihao"
    }
  }
  
  render() {
    return (
      <div>
          <button onClick={e=>this.changeText()}>变换</button>
      </div>
    )
  }
  //获取到异步更新的结果
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.message);
  }
  
  changeText(){
    //2.异步更新
    //2.1 可以显著提高性能,如果每次调用setState都会调用一次render函数,重新渲染,性能较低,获取到多个setState,再批量更新
    //2.2 如果同步更新,setState执行,render函数可能未执行,state和props就不能保持一致,会产生问题
    //回调函数获取到异步更新的结果
    this.setState({
      message:'Hello'
    }, ()=>{
      console.log(this.state.message);
    })
    console.log(this.state.message+"1"); //nihao
  }
}

/**
 * 在组件生命周期中或React合成元素中是异步
 * 在原生DOM,或setTime定时器中为同步
 */
