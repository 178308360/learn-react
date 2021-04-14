import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0,
       msg:'hello'
    }
  }
  
  render() {
    console.log("App组件被调用");
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+1</button>
        <button onClick={e=>this.changeText()}>改变文本</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps,nextState){
    if(this.state.counter !==nextState.counter){
      console.log(this.state.counter);
      console.log(nextState.counter);
      return true
    }
    //阻断render渲染
    return false;
  }
  changeText(){
    this.setState({
      msg:'nihao'
    },()=>{
    console.log(this.state.msg);
    })
  }
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
