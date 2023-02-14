import React from 'react'
import '../../App.css'
import { logout } from '../../config/firebase'

export default function dashboard() {
  return (
    <div className='dashboard'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyghJgCPosu2CX4u-JkQkjf33dCVKi6dDAQ&usqp=CAU' alt="" />
      <h1>To kese hen ap log?</h1>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}
