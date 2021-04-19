import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {storeContext} from './utils/context'
import store from './store'
//react-redux封装了connect ,context
import {Provider} from 'react-redux'
ReactDOM.render(
  // <storeContext.Provider value={store}>
  //   <App />
  // </storeContext.Provider>
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root')
);
