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

  return (
    <div
      className='modal-schedule'
      onClick={() => setModalIsOpen(false)}
      >
      <div className='modal-schedule-content'
        onClick={e => e.stopPropagation()}
      >
        {iconX}
        <h2>{hour}{date.toLocaleDateString()}</h2>      
      </div>
    </div>
  )
} 