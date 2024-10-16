import React, { useEffect, useState } from 'react'

const User = () => {
  const [users,setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>User : {users.length}
      {/* <h2>name : {users.name}</h2> */}
    </div>
  )
}

export default User

/*
  1. declatre a usestate hook
  2 . use useEffect hook to render json data
  3 . fetch the api

*/