import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  const obj = {
    name: "cbkjh"
  }

  const arr = [2,3,4,'d']

  return (
    <>
      <h1 className='bg-green-400 text-grey-500 p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card name="qwert" price="123"/>
      <Card name="asdfg" price="09876"/>
      <Card name="asdfg" />
      <Card name="asdfg" status="available"/>
      <Card myArr={arr} myObj={obj}/>
      
    </>
  )
}

export default App
