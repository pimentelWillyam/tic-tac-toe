import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Matrix } from './components/Matrix'

import {Container} from 'react-bootstrap'

function App() {

  return (
    <div className="App">
      <Container>
        <Matrix />
      </Container>
      
    </div>
  )
}

export default App
