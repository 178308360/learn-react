import React ,{useState}from 'react'

export default function MultiHook() {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(0)
  const [friends, setfriends] = useState(['k','y'])
  const [student, setstudent] = useState([
    {
     id:1, name:'li',age:18,
    },
    {
      id:2,name:'lihua',age:18
    }
    
  ])
  //对象地址没有改变,不会重新渲染界面,friends里有添加
  function add(){
    friends.push('hhh')
    setfriends(friends)
  }
  //复杂状态的修改
  function incrementAge(index){
    const newStudents=[...student]
    newStudents[index].age+=1
    setstudent(newStudents)
  }
  return (
    <div>
       {
         friends.map((item,index)=>{
           return <h2>{item}</h2>
         })
       } 
       <button onClick={e=>setfriends([...friends,'x'])}>修改数据</button>
       <button onClick={e=>add()}>修改数据</button>

       {
         student.map((item,index)=>{
           return <li key={item.id}>
             <span>{item.name}</span>
             <span>{item.age}</span>
             <button onClick={e=>incrementAge(index)}>age+1</button>
           </li>
         })
       }

    </div>
  )
}
