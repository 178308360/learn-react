import React from 'react';

// export default class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        message:"hello"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }

//函数组件,
//1.没有内部状态
//2.没有this对象
//3.没有生命周期,也会被挂载更新,但是没有生命周期
export default function App() {
  return (
    <div>
      <h2>函数组件</h2>
    </div>
  );
}
