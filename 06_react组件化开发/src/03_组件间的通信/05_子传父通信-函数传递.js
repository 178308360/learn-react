import React, { Component } from 'react';

class CounterButton extends Component {
  render() {
    const {increment} =this.props
    return (
      <div>
        <button onClick={increment}>+1</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </button>
        <CounterButton increment={e=>this.increment()}/>
      </div>
    );
  }
  increment() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
