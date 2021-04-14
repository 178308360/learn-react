import React, { Component } from 'react';
//Header
function Header() {

  return <h2>我是header组件</h2>
}
//main
class Banner extends Component{
  render() {
    return (
      <div>
        <h2>我是banner组件</h2>
      </div>
    )
  }
}
function ProductList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}
class Main extends Component {
  render() {
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}
//footer
function Footer() {
  return <h2>我是footer组件</h2>;
}

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
  }
  
  render() {
    return (
      <div>
        {/* 当更新counter时,所有组件都会被重新渲染,实际情况不需要重新渲染 */}
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
