import { useState } from 'react'
import { Calendar } from '../Calendar'
import './style.css'

export function App() {
  
  const [date, setDate] = useState<Date>(new Date())

  return (

    <div className="App">
      <h1>!</h1>
      <Calendar date={date} />
    </div>
  )
}


