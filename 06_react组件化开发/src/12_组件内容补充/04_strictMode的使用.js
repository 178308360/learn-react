import React, { PureComponent,StrictMode } from 'react';


/**
 * 1.识别不安全的生命周期
 * 2.使用过时的ref API
 * 3.检查意外的副作用
 * 构造函数会被调用两次,这是严格模式下的故意操作,让你查看写的一些逻辑代码被调用多次,是否产生一些副作用
 * 在生产环境中,不会被调用两次
 * 4.使用废弃的findDOMNode方法
 * 5.检测过时的contextAPI
 */
class Header extends PureComponent{
  UNSAFE_componentWillMount(){
    console.log('header');
  }
  render() {
    return (
      <div>
        <h2>头部</h2>
      </div>
    )
  }
}
class Main extends PureComponent{
 UNSAFE_componentWillMount(){
   console.log('1');
 }
  render() {
    return (
      <div>
        <h2>首要</h2>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Header/>
        </StrictMode>
        <Main></Main>
      </div>
    );
  }
}
