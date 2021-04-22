import React,{useState}from 'react'

export default function Counterhooks() {

  const [count,setCount]= useState(0)
  // const [count, setCount] = useState(()=>10)
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={e=>setCount(count+1)}>+1</button>
      {/* <button onClick={e=>setCount((preState=>preState+2))}>+1</button> */}
    </div>
  )
}
