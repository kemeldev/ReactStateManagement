import { create } from 'zustand';

// vamos a manejar esta funcio store como el proovedor de zustand
// recibe set y devuelve un objeto, este objeto puede contener mucha informacion, va a ir creciendo gradualmente
const store = (set) => ({
  tasks: [{ title: "TestTask", state: 'PLANNED' }]
})

export const useStore = create(store)