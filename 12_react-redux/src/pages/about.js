import React, { PureComponent } from 'react';
import store from '../store';
import { subAction } from '../store/actionCreators';
export default class about extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe((e) => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentWillUnmount() {
    //取消订阅
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1>about</h1>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={(e) => this.decrement()}>-1</button>
        <button onClick={(e) => this.subNumber(5)}>-5</button>
      </div>
    );
  }
  decrement() {
    store.dispatch(subAction(1));
  }
  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
