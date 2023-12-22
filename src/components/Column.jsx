/* eslint-disable react/prop-types */
import { useStore } from '../store'
import './Column.css'
import Task from './Task'

const STATUS = 'DONE' // est era para una prueba inicial, pero ahora vamos a pasar el status a traves del provider zustand

export default function Column ({state}){
  // Ojo a la funcion filter, VER EL ARCHIVO TEMP.JSX CREADO CON LA EXPLICACION
  const tasks = useStore((store) => 
    store.tasks.filter((task)=> task.state === state))
  // con zustand a diferencia de useContext podemos traer unicamente el dato que nececitamos (conext trae todo el stado general) y que se renderize cuando este componente específico cambia

  return (
    <div className="column">
      <p>{state}</p>

      {
        tasks.map((task) => (
          <Task
            key={task.title}
            title={task.title}
            STATUS={STATUS}
      
      />
        ))
      }
      
    </div>
  )
}