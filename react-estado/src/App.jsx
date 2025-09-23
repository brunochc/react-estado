import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count -1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className = "app-container">
        <h1>Contador</h1>

        <div className = "counter-display">
          <span className = "counter-number">{count}</span>
 
        </div>
        <div>
          <button onClick={decrementCount} className="btn btn-decrement"> - Decrementar</button>
          <button onClick={resetCount} className="btn btn-reset">Reset</button>
          <button onClick={incrementCount} className="btn btn-increment"> + Incrementar</button>
        </div>
        <p className='counter-info'>Valor Actual: {count}</p>
      </div>
    </>
  )
}

export default App
