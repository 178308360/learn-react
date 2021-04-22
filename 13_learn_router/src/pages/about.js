import React, { PureComponent } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

export function History(props) {
  return (
    <div>
      <h2>1999年</h2>
    </div>
  )
}
export function contact(props) {
  return (
    <div>
    <h2>133</h2>
  </div>
  )
}
 export function culture(props) {
  return (
    <div>
    <h2>好好好</h2>
  </div>
  )
}
export function join(props) {
  return (
    <div>
    <h2>邮箱</h2>
  </div>
  )
}

export default class About extends PureComponent {
  render() {
    const match=matchRoutes(this.props.route.routes,'/about');
    console.log(match);
    return (
      <div>
          <NavLink exact to="/about" activeClassName="about-active">
            历史
          </NavLink>
          <NavLink to="/about/contact" activeClassName="about-active">
            联系方式
          </NavLink>
          <NavLink to="/about/culture" activeClassName="about-active">
            企业文化
          </NavLink>
          <button onClick={()=>this.join()}>加入我们</button>

          {/* <Switch>
            <Route exact path="/about" component={History}></Route>
            <Route path="/about/contact" component={contact}></Route>
            <Route path="/about/culture" component={culture}></Route>
            <Route path="/about/join" component={join}></Route>
          </Switch> */}
        <h2>About</h2>
          {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
  join(){
    // console.log(this.props.history);
    // console.log(this.props.match);
    // console.log(this.props.location);
    this.props.history.push("/about/join")
  }
}
