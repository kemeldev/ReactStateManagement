/* eslint-disable react/prop-types */
import './Task.css';
import classNames from 'classnames';

export default function Task({ title, STATUS }) {
  return (
    <div className='task'>
      <div>{title}</div>
      <div>
        <div></div>
        <div className={classNames('status', STATUS)}>{STATUS}</div>
      </div>
    </div>
  )
  
}