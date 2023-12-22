import { create } from 'zustand';

// vamos a manejar esta funcio store como el proovedor de zustand
// recibe set y devuelve un objeto, este objeto puede contener mucha informacion, va a ir creciendo gradualmente
const store = (set) => ({
  tasks: [{ title: "TestTask", state: 'PLANNED' }],
  draggedTask: null,
  // agregamos la funcion para añadir tareas, luego se la pasamos a column para que se puedan añadir
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  // funcio para elminar tareas, esta se la pasamos a Task.jsx
  deleteTask: (title) =>
    set((store) => ({ tasks: store.tasks.filter((task) => task.title !== title) })),
  // agregamos la funcion de drag, primero añadimos arriba draggedTask
  setDraggedTask: (title) =>
    set({ draggedTask: title }),
  // tambien creamos la funcion para cambiarle de estado al moverla
  moveTask: (title, state) => {
    set((store) => ({
      tasks: store.tasks.map((task) => (task.title === title ? { title, state } : task))
    }))
  }

})

export const useStore = create(store)