import React, {useState,useEffect } from 'react'

/**
 * 组件重新渲染
 * Effect函数都会执行一遍
 */
export default function MultiEffect() {
  const [count,setCount]= useState(0)
  const [isLogin,setisLogin]= useState(false)

  //count值改变才会重新执行函数,性能优化
  useEffect(()=>{
    console.log('修改DOM',count);
  },[count])
  //空数组,第一次渲染时执行一次
  useEffect(()=>{
    console.log('订阅事件');
},[])
useEffect(()=>{
  console.log('请求');
},[])
  return (
    <div>
      
      <button onClick={e=>setCount(count+1)}>+1</button>
      <button onClick={e=>setisLogin(!isLogin)}>登录</button>
    </div>
  )
}
