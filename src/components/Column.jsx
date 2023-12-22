/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useStore } from '../store'
import './Column.css'
import Task from './Task'
import classNames from 'classnames'

const STATUS = 'DONE' // est era para una prueba inicial, pero ahora vamos a pasar el status a traves del provider zustand

export default function Column ({state}){
  const [text, setText] = useState('')  // este es el estado para cambiar el nombre de la tarea
  const [open, setOpen] = useState(false) // este es para abrir un modal
  const [drop, setDrop] = useState(false)
  

  // Ojo a la funcion filter, VER EL ARCHIVO TEMP.JSX CREADO CON LA EXPLICACION
  const tasks = useStore((store) => 
    store.tasks.filter((task)=> task.state === state))
  // con zustand a diferencia de useContext podemos traer unicamente el dato que nececitamos (conext trae todo el stado general) y que se renderize cuando este componente específico cambia

  // traemos la funcion de store para agregar tareas
  const addTask = useStore((store) => store.addTask)

  const setDraggedTask = useStore((store) => store.setDraggedTask)
  const draggedTask = useStore((store) => store.draggedTask)
  const moveTask = useStore((store) => store.moveTask)

  return (
    <div 
      className={classNames("column", {drop: drop})}
      onDragOver={(e) => {
        setDrop(true)
        e.preventDefault()}
      }
      onDragLeave={(e) => {
        setDrop(false)
        e.preventDefault()}
      }
      onDrop={() => {
        console.log(draggedTask)
        moveTask(draggedTask, state)
        setDraggedTask(null)
      }}
      >
      <div>
        <p>{state}</p>
        <button 
          style={{marginBottom: '15px'}}
          onClick={() => setOpen(true)}  // abrimos el modal
          >
          Add
        </button>
      </div>
      
      {
        tasks.map((task) => (
          <Task
            key={task.title}
            title={task.title}
            STATUS={STATUS}      
      />
        ))}
      {open &&
      <div className='Modal'>
        <div className='modalContent'>
          <input 
            onChange={(e) => setText(e.target.value)}
            value={text}>
          </input>
          <button
            onClick={() => {
              addTask(text, state)
              setText('')
              setOpen(false)
            }}

          >
            Submit
          </button>
        </div>
      </div>
      }    
    </div>
  )
}