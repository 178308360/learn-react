import React, { Component } from 'react';

import NavBar from './NavBar';
import NavBar2 from './NavBar2';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </NavBar>

        <NavBar2
          leftSlot={<span>1</span>}
          centerSlot={<span>2</span>}
          rightSlot={<span>3</span>}
        />
      </div>
    );
  }
}
