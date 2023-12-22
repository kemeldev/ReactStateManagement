/* eslint-disable react/prop-types */
import './Column.css'
import Task from './Task'

const STATUS = 'PLANNED'

export default function Column ({state}){
  return (
    <div className="column">
      <p>{state}</p>
      <Task
       title='Todo'
       STATUS={STATUS}
      
      />
    </div>
  )
}