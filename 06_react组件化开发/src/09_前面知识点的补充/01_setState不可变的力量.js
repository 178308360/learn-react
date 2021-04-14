import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: 'lilei', age: 20 },
        { name: 'lily', age: 22 },
        { name: 'lucy', age: 20 },
      ],
    };
  }
  //如果直接修改原数据,两个数组的引用相同,则不会进行渲染,
  // shouldComponentUpdate(newState) {
  //   if (newState.friends !== this.state.friends) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    return (
      <div>
        <h2>好友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                {item.name} 年龄:{item.age}
                <button onClick={(e) => this.increment(index)}>age+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.insertData()}>添加数据</button>
      </div>
    );
  }
  insertData() {
    console.log('点击添加数据');
    //不要这么做
    // const newData={name:'ll',age:20}
    // this.state.friends.push(newData)
    // this.setState({
    //   friends:this.state.friends
    // })
    //推荐做法
    const newData = { name: 'll', age: 20 };
    const newFriends = [...this.state.friends];
    newFriends.push(newData);
    this.setState({
      friends: newFriends,
    });
  }
  increment(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age +=1;
    this.setState({
      friends: newFriends,
    });
  }
}
