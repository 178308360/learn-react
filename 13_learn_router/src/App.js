import React, { PureComponent } from 'react';

import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import noMath from './pages/noMath';
import product from './pages/product';
import detail from './pages/detail';
import detail2 from './pages/detail2';
import detail3 from './pages/detail3';

import { renderRoutes } from 'react-router-config';
import  routes  from './router';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          to: '/',
          title: '首页',
        },
        { to: '/about', title: '关于' },
        { to: '/user', title: '用户' },
      ],
      currentIndex: 0,
    };
  }

  render() {
    const id = 'abc';
    const info = { name: 'why', age: 18 };
    return (
      <div>
        {this.state.links.map((item) => {
          return (
            //exact精确匹配 activeClassName自定义活跃时类名称
            <NavLink exact to={item.to} activeClassName="link-active">
              {item.title}
            </NavLink>
          );
        })}
        {/* 1.传递参数 */}
        <NavLink to={`/detail/${id}`} activeClassName="link-active">
          详情
        </NavLink>
        {/* 2.search传递参数 ?后面是search */}
        <NavLink to={'/detail2?name=why&age=18'} activeClassName="link-active">
          详情2
        </NavLink>
        <NavLink
          to={{
            pathname: '/detail3',
            state: info,
          }}
          activeClassName="link-active"
        >
          详情3
        </NavLink>

        <button onClick={() => this.product()}>商品</button>
        {/* exact精确匹配 */}
        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
          会给组件传递参数 history location match
          <Route path="/about" component={About}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/product" component={product}></Route>
          动态路由
          <Route path="/detail/:id" component={detail}></Route>
          <Route path="/detail2" component={detail2}></Route>
          <Route path="/detail3" component={detail3}></Route>
          默认匹配
          <Route component={noMath}></Route>
          </Switch> */}
          {renderRoutes(routes)}
      </div>
    );
  }
  product() {
    this.props.history.push('/product');
    // const info = { name: 'why', age: 18 };
    // this.props.history.push('/detail3',info);
    
  }
}
export default withRouter(App);
