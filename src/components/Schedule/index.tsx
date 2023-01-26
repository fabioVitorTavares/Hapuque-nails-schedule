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

export function Schedule() {

  const schedules = (
    <div className='schedules'>
      {
        timeWindows.map(t => (
          <span
            className='hour'
          >
            {t}
          </span>
        ))
      }      
    </div>
  )

  return (
    <div className='schedule'>
      {schedules}
    </div>
  )
}