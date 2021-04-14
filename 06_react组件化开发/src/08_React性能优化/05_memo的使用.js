import React, { PureComponent, memo } from 'react';
//Header
const MemoHeader=memo(function Header() {
  console.log('Header');
  return <h2>我是header组件</h2>;
});

//main
class Banner extends PureComponent {
  render() {
    console.log('Banner');
    return (
      <div>
        <h2>我是banner组件</h2>
      </div>
    );
  }
}
function ProductList() {
  console.log('ProductList');
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
class Main extends PureComponent {
  render() {
    console.log('Main');
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    );
  }
}
//footer
const Footer=memo(
  function Footer() {
    console.log('Footer');
    return <h2>我是footer组件</h2>;
  }
)

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    console.log('App');
    return (
      <div>
        {/* 当更新counter时,所有组件都会被重新渲染,实际情况不需要重新渲染 */}
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <MemoHeader />
        <Main />
        <Footer />
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
