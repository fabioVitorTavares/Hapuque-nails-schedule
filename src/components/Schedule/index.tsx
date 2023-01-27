import { useState } from 'react'
import { propsSchedule } from '../../types'
import { ModalSchedule } from '../ModalSchedule'
import './style.css'

const timeWindows = [
  '08:00 - 08:50',
  '09:00 - 09:50',
  '10:00 - 10:50',
  '11:00 - 11:50',
  '12:00 - 12:50',
  '13:00 - 13:50',
  '14:00 - 14:50',
  '15:00 - 15:50',
  '16:00 - 16:50',
  '17:00 - 17:50'
]

export function Schedule({date}: propsSchedule) {
  
  const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false)
  const [hourSelected, setHourSelected] = useState<String>('')

  const openModal = (t: String) => {
    setHourSelected(t)
    setModalIsOpen(true)
  }

  const schedules = (    

    <div
      className='schedules'      
    >
      {
        timeWindows.map(t => (
          <span
            className='hour'
            key={t}
            onClick={() => openModal(t)}
          >
            {t}
          </span>
        ))
      }      
    </div>
  )
  

  return (
    <div className='schedule'>
      <h2>{date.toLocaleDateString()}</h2>
      {schedules}
      {modalIsOpen &&
        <ModalSchedule
          date={date}
          hour={hourSelected}
          setModalIsOpen={setModalIsOpen}
        />
      }
    </div>
  )
}