import React, { PureComponent, createRef } from 'react';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
    this.inputRef = new createRef();
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户:
            <input type="text" name="" id="username" ref={this.inputRef} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(
    this.inputRef.current.value
    )
  }
}
