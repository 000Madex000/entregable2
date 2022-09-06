import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Climate from './componentes/Climate'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Climate/>
    
    </div>
  )
}

export default App
