import { propsCalendar } from '../../types'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import './style.css'

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


export function Calendar({ date, setDate }: propsCalendar){

  const [referenceDate, setReferenceDate] = useState<Date>(new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay()))
  const [currentsDates, setCurrentsDates] = useState<Date[]>([])
  const [animationCalendar, setAnimationCalendar] = useState<String>('')
  const refNumberOfCalendar = useRef<HTMLDivElement>(null)
  const refNumberOfDay = useRef<HTMLSpanElement>(null)

  useEffect(() => {  
   
    const daysLeft: Date[] = [referenceDate]
    const daysRigth: Date[] = []

    for (let i = 1; i <= 28; i++){
      daysLeft.unshift(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() - i))
    }
    
    for (let i = 1; i <= 27; i++){
      daysLeft.push(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() + i))
    }

    setCurrentsDates([...daysLeft,  ...daysRigth])
    
  },[referenceDate])

  const changeReferenceDate = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setReferenceDate(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() + 7))
      const newAnimation = animationCalendar == 'move-up' ? 'move-up-1' : 'move-up'
      setAnimationCalendar(newAnimation)
    }
    else {
      setReferenceDate(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() - 7))
      const newAnimation = animationCalendar == 'move-down' ? 'move-down-1' : 'move-down'
      setAnimationCalendar(newAnimation)
    }
  }
  
  const wheelDown = new WheelEvent("wheel", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    deltaY: 100
  });

  const wheelUp = new WheelEvent("wheel", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20,
    deltaY: -100
  });
  
  const nextMonth = () => {
    
    refNumberOfCalendar.current?.dispatchEvent(wheelDown)    
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelDown)          
    }, 150)
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelDown)          
    }, 350)
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelDown)          
    }, 550)    
  }

  const laterMonth = () => {
    
    refNumberOfCalendar.current?.dispatchEvent(wheelUp)    
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelUp)          
    }, 150)
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelUp)          
    }, 350)
    setTimeout(() => {
      refNumberOfCalendar.current?.dispatchEvent(wheelUp)          
    }, 550)  
  }

  const selectors = (
    <div className='selectors'>
      <IoIosArrowDown
        onClick={nextMonth}
      />
      <IoIosArrowUp
        onClick={laterMonth}
      />
    </div>
  )

  const monthSelectCalendar = (
    <div className='month-select-calendar'>
      {months[referenceDate.getMonth()]} de {referenceDate.getUTCFullYear()}
      {selectors}
    </div>
  )

  const daysCalendar = (
    <div className='days-calendar'>
      <span>D</span>
      <span>S</span>
      <span>T</span>
      <span>Q</span>
      <span>Q</span>
      <span>S</span>
      <span>S</span>
    </div>
  )

  const headerCalendar = (
    <div className='header-calendar'>
      {monthSelectCalendar}
      {daysCalendar}
    </div>
  )

  const getStyleNumberOfDay = (d: Date) => {
    const style = {
      opacity: '1',
      backgroundColor: '',
    }

    style.opacity =  d.getMonth() == referenceDate.getMonth() ? '1':'0.5' 
    style.backgroundColor = date.toLocaleDateString() == d.toLocaleDateString() ? '#0646f5' : ''

    return style
  }

  const bodyCalendar = (
    <div
      className='body-calendar'
      onWheel={e => changeReferenceDate(e)}
    >
      <div
        ref={refNumberOfCalendar}
        className='numbers-of-calendar'
        style={{ animation: `${animationCalendar} 0.5s ease ` }}        
      >
        {
          currentsDates.map(d =>
            <span
              className='number-of-day' 
              ref={refNumberOfDay}
              key={d.toLocaleDateString()}
              style={getStyleNumberOfDay(d)}
              onClick={() => setDate(d)}
              
            >
              {d.getDate()} 
            </span>)
        }
      </div>
    </div>
  )

  return (
    <div className='calendar'>
      {headerCalendar}
      {bodyCalendar}
    </div>
  )
}