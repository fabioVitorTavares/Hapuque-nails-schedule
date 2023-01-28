import { propsModalSchedule } from '../../types'
import { IoMdClose } from 'react-icons/io'
import './style.css'

export function ModalSchedule({date, hour, setModalIsOpen}: propsModalSchedule) {

  const iconX = (
    <IoMdClose
      className='icon-x-modal-schedule'
      onClick={() => setModalIsOpen(false)}
    />
  )

  const btnCancel = (
    <button
      className='btn btn-cancel '
      onClick={() => setModalIsOpen(false)}
    >
      cancelar
    </button>
  )

  const btnToSchedule= (
    <button className='btn btn-to-schedule'>
      agendar horário
    </button>
  )

  const infosUserSchedule = (
    <div className='infos-user-schedule'>
      <h2>Cliente: </h2>
      <h2>Dia: {date.toLocaleDateString()} </h2>
      <h2>Horário: {hour}</h2>
    </div>
  )

  return (
    <div
      className='modal-schedule'
      onClick={() => setModalIsOpen(false)}
      >
      <div className='modal-schedule-content'
        onClick={e => e.stopPropagation()}
      >
        {iconX}        
        {infosUserSchedule}        
        <div className='btns-modal-schedule'>
          {btnCancel}
          {btnToSchedule}
        </div>
      </div>
    </div>
  )
} 