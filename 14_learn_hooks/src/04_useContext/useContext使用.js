import React ,{useContext}from 'react'

import {userContext} from '../App'

export default function ContextHook() {
  const user=useContext(userContext)
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}
