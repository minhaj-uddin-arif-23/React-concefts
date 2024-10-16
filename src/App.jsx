
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'

function App() {
  return (
    <>
      <div>
      <Team />
      <Counter />
      <User />
          <button onClick={handleClick}>submit</button>
          <button onClick={handleClick2}>submit</button>
          {/* uncommon  */}
          <button onClick={() => numbers(25)}>click</button>
          <h2>React core concepts no 1 video end</h2>
     
      </div>
    </> 
  )
}

function handleClick(){
  alert('button submitted by onClick')
}
function handleClick2(){
  alert('button submitted by onClick')
}

const numbers = (num) => {
  alert(num + 20)
}
// numbers(10)

export default App
