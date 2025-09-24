import { useState } from 'react'

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
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-body-tertiary">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-lg">
            <div className="card-body text-center">
              <h1 className="card-title display-6 fw-bold mb-3">Contador</h1>
              <div className="display-1 fw-bold my-3">{count}</div>
              <div className="d-flex gap-2 justify-content-center flex-wrap my-3">
                <button onClick={decrementCount} className="btn btn-danger">- Disminuir</button>
                <button onClick={resetCount} className="btn btn-secondary">Reset</button>
                <button onClick={incrementCount} className="btn btn-success">+ Incrementar</button>
              </div>
              <p className="text-muted mb-0">Valor Actual: {count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
