import  { useState } from 'react'


const Counter = () => {
  const [count,setCount] = useState(0)
  
  const Increase = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const Decrease = () => {
    const newCount = count - 1
    setCount(newCount)
  }
  return (
    <div>
      <h3>Counter :{count} </h3>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>decrease</button>
    </div>
  )
}



export default Counter