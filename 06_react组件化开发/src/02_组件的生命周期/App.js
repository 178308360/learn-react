import React, { Component } from 'react'

class Cpn extends Component {
    render() {
      return (
        <div>
          <h2>我是cpn组件</h2>
        </div>
      )
    }
}

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        count:0,
        isShow:true
    }
    console.log("执行了组件的constructor方法");
  }
  
  render() {
    console.log("执行了组件的render方法");
    return (
      <div>
        <button onClick={()=>{
          this.increment()
        }}>+1</button>
        <h2>当前计数:{this.state.count}</h2>
        <button onClick={()=>{
          this.changeShow()
        }}>切换</button>
        {this.state.isShow &&<Cpn/>}
      </div>
    )
  }
  /*
  挂载阶段
  先执行构造方法
  再执行render方法渲染
  最后执行componentDidMount方法
  */
  componentDidMount(){
    console.log("执行了组件的DidMount方法");
  }
  /*
  更新阶段
  先执行setState方法
  再执行render方法渲染
  最后执行componentDidUpdate方法
   */
  componentDidUpdate(preProps,prevState,snapShot){
    console.log("执行了组件的DidUpdate方法");
  }
  increment(){
    this.setState({
      count:this.state.count+1
    })
  }
  /**
   * 卸载阶段
   * 先执行componentWillUnmount方法
   * 然后执行render
   */
  componentWillUnmount(){
    console.log("执行了组件的WillUnmount方法");
  }
  changeShow(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  
}
