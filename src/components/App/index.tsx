import { useState } from 'react'
import { Calendar } from '../Calendar'
import { Schedule } from '../Schedule'
import './style.css'

export function App() {
  
  const [date, setDate] = useState<Date>(new Date())

  return (

    <div className="app">      
      <Calendar date={date} setDate={setDate} />
      <Schedule date={date}/>
    </div>
  )
}


