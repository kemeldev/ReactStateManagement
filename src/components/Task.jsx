/* eslint-disable react/prop-types */
import { useStore } from '../store';
import './Task.css';
import classNames from 'classnames';
import trash from '../assets/trash-2.svg'

export default function Task({ title}) {
  
  const task = useStore((store) => store.tasks.find((task) => task.title === title))

  const deleteTask = useStore(store => store.deleteTask)

  return (
    <div className='task'>
      <div>{task.title}</div>
      <div className='bottomWrapper'>
        <div>
          <img
            src={trash} 
            onClick={() => deleteTask(title)}
          />
        </div>
        <div className={classNames('status', task.state)}>{task.state}</div>
      </div>
    </div>
  )
  
}