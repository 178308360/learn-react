import React, { Component } from 'react';
//Header
function Header() {
  return <h2>我是header组件</h2>;
}
//main
function Banner() {
  return <h2>我是banner组件</h2>;
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
function Main() {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
}
//footer
function Footer() {
  return <h2>我是footer组件</h2>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
