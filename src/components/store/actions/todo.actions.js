/** actions */
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

/** initalID */
let initalID = 0

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: initalID++,
    text
  }
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
})
