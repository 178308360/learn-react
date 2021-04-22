import React,{useState,useEffect}from 'react'

export default function EffectHookCancel() {
  const [count,setCount]= useState(0)
  useEffect(()=>{
    console.log('订阅一些事件');
    return ()=>{
      console.log('取消订阅');
    }
  },[])
  return (
    <div>
    <h2>当前计数:{count}</h2>
      <button onClick={e=>setCount(count+1)}>+1</button>
    </div>
  )
}
