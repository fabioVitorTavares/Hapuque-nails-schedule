import { propsCalendar } from '../../types'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './style.css'
import { useEffect, useState } from 'react'

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export function Calendar({ date }: propsCalendar){

  const [referenceDate, setReferenceDate] = useState<Date>(new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay()))
  const [currentsDates, setCurrentsDates] = useState<Date[]>([])
  const [animationCalendar, setAnimationCalendar] = useState<String>('')

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
    if (e.deltaY == 100) {
      setReferenceDate(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() + 7))
      setAnimationCalendar(new String('move-up'))
    }
    else if (e.deltaY == -100) {
      setReferenceDate(new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate() - 7))
      setAnimationCalendar(new String('move-down'))
    }
  }

  const selectors = (
    <div className='selectors'>
      <IoIosArrowDown />
      <IoIosArrowUp />
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

  const bodyCalendar = (
    <div
      className='body-calendar'
      onWheel={e => changeReferenceDate(e)}
    >
      <div
        className='numbers-of-calendar'
        style={{animation: `${animationCalendar} 1s ease `}}
      >
        {
          currentsDates.map(d =>
            <span
            className='number-of-day'
            key={d.toLocaleDateString()}
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