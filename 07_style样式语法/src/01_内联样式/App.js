import React, { PureComponent } from 'react';
/**
 * 样式之间不会冲突
 * 可以动态获取state中的状态
 * 
 * 缺点:
 * 需要使用驼峰语法
 * 有些样式没有提示
 * 大量的样式,代码混乱
 * 某些样式无法编写 (如伪类/伪元素)
 */
export default class App extends PureComponent {
  render() {
    const pStyle={
      color:'red'
    }
    return (
      <div>
        <h2 style={{ fontSize: '50px', color: 'red' }}>我是标题</h2>
        <p style={pStyle}>我是一段文字描述</p>
      </div>
    );
  }
}
