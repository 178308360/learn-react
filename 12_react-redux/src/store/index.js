//导入redux
import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer.js'
import sage from './saga'
//导入中间件
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-sage'

//中间件
//1.引用thunkMiddleware中间件
//2.创建sagaMiddleware中间件
const sagaMiddleware=createSagaMiddleware()
const storeEnhancer= applyMiddleware(thunkMiddleware,sagaMiddleware)

//store
// const store = createStore(reducer,storeEnhancer,
//   );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
     storeEnhancer
    ));
sagaMiddleware.run(sage)
export default store