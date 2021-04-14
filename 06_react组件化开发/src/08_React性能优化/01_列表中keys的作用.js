import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['A', 'B'],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {/* key作用是优化列表,特别是插入数据时,使用key可以匹配原来的树上的子元素和最新树上的子元素
          在这种情况下 key为A和B的元素仅仅进行位移,不许要进行任何修改,将kye为c的元素插入到最前面即可
          key是唯一的,不使用随机数,不使用index,对优化没有用 */}
          {this.state.names.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
        <button onClick={(e) => this.add()}>添加数据</button>
      </div>
    );
  }
  add() {
    this.setState({
      names: ['C', ...this.state.names],
    });
  }
}
