import { useState } from 'react'
import './App.css'
import { Matrix } from './components/Matrix'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Matrix />
    </div>
  )
}

export default App
