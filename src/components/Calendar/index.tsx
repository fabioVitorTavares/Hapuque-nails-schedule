import { propsCalendar } from '../../types'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import './style.css'

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export function Calendar({ date }: propsCalendar){

  const selectors = (
    <div className='selectors'>
      <IoIosArrowDown />
      <IoIosArrowUp />
    </div>
  )

  const monthSelectCalendar = (
    <div className='month-select-calendar'>
      {months[date.getMonth()]} de {date.getUTCFullYear()}
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
    <div className='body-calendar'>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  )

  return (
    <div className='calendar'>
      {headerCalendar}
      {bodyCalendar}
    </div>
  )
}