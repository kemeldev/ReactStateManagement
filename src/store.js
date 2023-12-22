import { create } from 'zustand';

// vamos a manejar esta funcio store como el proovedor de zustand
// recibe set y devuelve un objeto, este objeto puede contener mucha informacion, va a ir creciendo gradualmente
const store = (set) => ({
  tasks: [{ title: "TestTask", state: 'PLANNED' }],
  // agregamos la funcion para añadir tareas, luego se la pasamos a column para que se puedan añadir
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })),
  // funcio para elminar tareas, esta se la pasamos a Task.jsx
  deleteTask: (title) =>
    set((store) => ({ tasks: store.tasks.filter((task) => task.title !== title) }))


})

export const useStore = create(store)