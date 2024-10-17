import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue =  () => {
      counter += 1;
      if(counter > 20){
        alert("Limit exceeded")
      } else {
      setCounter(counter);
    }
    }
  const removeValue = () => {
    counter -= 1;
    setCounter(counter);
  }
  const clearValue = () => {
    counter = 0;
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value{counter}</button>
      <p>Footer : {counter}</p>
      <button
      onClick={clearValue}
      >Clear</button>
    </>
  )
}

export default App
