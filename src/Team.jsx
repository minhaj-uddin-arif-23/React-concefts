import React, { useState } from 'react'

const teamStyle = {
  border:"2px solid yellow",
  margin:'15px',
  padding:'15px',
  borderRadius:'15px'
}


const Team = () => {
  const [team, setTeam] = useState(22)
  const add = () => {
    const newCount = team + 1
    setTeam(newCount)
  }
  const remove = () => {
    const rr = team - 1
    setTeam(rr)
  }
  return (
    <div style={teamStyle}>
      <h2>Players : {team}</h2>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>
    </div>
  )
}

export default Team