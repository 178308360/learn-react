//1.返回数组或Fragments:使得render方法返回多个元素
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return [<div></div>, <div></div>];
  }
}


//2.返回React元素,通常通过jsx创建,例如,div被渲染成DOM元素,MyComponent被渲染为自定义组件
// import React, { Component } from 'react'

// export default class 02_render函数返回值 extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
/*
3.Portals:可以渲染子节点到不同的DOM子树中
4.字符串或数值类型:它们在DOM中会被渲染为文字节点
5.null或布尔类型 :什么都不渲染
*/

