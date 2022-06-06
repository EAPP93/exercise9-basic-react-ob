import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FILTER_TODO } from '../actions/todo.actions'

/** reducers */

const reducerTodo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          },
          ...state.items
        ]
      }

    case REMOVE_TODO:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.payload)
      }

    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
        )
      }

    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state
  }
}

export default reducerTodo
