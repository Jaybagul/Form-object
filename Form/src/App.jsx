import { useState } from 'react'
import './App.css'
import StudentForm from './Components/StudentForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentForm />
    </>
  )
}

export default App
