import store from './store/index.js';
import {addAction} from './store/actionCreators.js'
//订阅store的修改
store.subscribe(()=>{
  console.log('counter:',store.getState().counter);
})

//派发action
store.dispatch(addAction(10));