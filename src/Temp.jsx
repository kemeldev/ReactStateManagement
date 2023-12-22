
// import { useStore } from "./store";
// import { useMemo } from "react";
// import {shallow} from "zustand/shallow"

// export default function Temp ({state}){
  // whenever the return value of this selector changes , zustand recalls react to create a re render
  // .filter method will ALWAYS create a new instance of the array , a new a array is a new value and therefore it will allways recall React for a Re-render

  // const tasks = useStore(store => store.tasks.filter(task.state === state))

  // solucion con react!

//   const tasks = useStore((store)=> store.task)

//   const filtered = useMemo(
//     () => tasks.filter((task) => task.state === state),
//     [tasks, state]
//   )
// }

  // Zustand nos da una mejor solucion !

//   const tasks = useStore(
//     (store) => store.tasks.filter((task) => task.state === state),
//     shallow // shallow es una funcion que compara unicamente si el contenido del array creado (por el filter) en este caso cambia con el original 
//   )
// }

  // sin usar el shallow una opcion alternativa seria:

  // Basicamente compara el array anterior (prev) con el nuevo creado por el filter(next) en cuanto a su longitud y devuelve true o false si es mas grande o no 

  // const tasks = useStore(
  //   (store) => store.tasks.filter((task) => task.state === state),
  //   (prev, next) => {
  //     const longest = prev.length > next.length ? prev.length : next.length
  //     for ( let i = 0; i < longest; i++){
  //       if(!prev[i] || !next[i]) return false
  //       if(prev[i] !== next[i]) return false
  //     }
  //     return true
  //   }
  // )
