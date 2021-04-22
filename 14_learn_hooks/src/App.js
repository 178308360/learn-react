import React,{createContext} from 'react'
// import CounterClass from './01_体验hooks/01_counter-class'
// import CounterHooks from './01_体验hooks/02_counter-hooks'
// import MultiHook from './02_useState的使用/01_多个状态的使用'
// import TitleCClass from './03_useEffect的使用/01_class实现title的修改'
// import Titlehooks from './03_useEffect的使用/02_hook实现'
// import EffectHookCancel from './03_useEffect的使用/03_模拟订阅和取消订阅'
// import MultiEffect from './03_useEffect的使用/04_多个useEffect一起使用'
import ContextHook from './04_useContext/useContext使用'
export const userContext=createContext()
export default function App(){
  return(
    <div>
        {/* <CounterClass></CounterClass>
        <CounterHooks></CounterHooks>
        <MultiHook></MultiHook> */}
        {/* <TitleCClass></TitleCClass> */}
        {/* <Titlehooks></Titlehooks> */}
        {/* <EffectHookCancel></EffectHookCancel> */}
        {/* <MultiEffect></MultiEffect> */}
        <userContext.Provider value={{name:'www'}}>
          <ContextHook></ContextHook>
        </userContext.Provider>
    </div>
  )
}