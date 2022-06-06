import React, { useContext, useReducer } from 'react'
import propTypes from 'prop-types'

import TodoForm from '../pure/form/TodoForm'
import Todo from '../pure/Todo'

/** todo reducers and actions */
import reducerTodo from '../store/reducers/todo.reducer.js'
import { addTodo, removeTodo, toggleTodo, filterTodo, FILTER_TODO } from '../store//actions/todo.actions'

/** a context is created for useContext */
const mycontext = React.createContext(null)

const ListTODO = ({ remove, toggle }) => {
  /** state context */
  const state = useContext(mycontext)

  let todos = []
  switch (state.filter) {
    case FILTER_TODO.SHOW_ACTIVE:
      todos = state.items.filter(todo => todo.completed === false)
      break

    case FILTER_TODO.SHOW_COMPLETED:
      todos = state.items.filter(todo => todo.completed === true)
      break

    default:
      todos = state.items
      break
  }

  return (
    (state.items.length > 0
      ? <ul>
          {
            todos.map((todo, index) => (
              <Todo key={index} todo={todo} remove={remove} toggle={toggle}></Todo>
            ))
          }
        </ul>
      : <p>there is nothing TODOs</p>
    )
  )
}

/** state for useReducer */
const initalState = {
  items: [],
  isLoanding: false,
  filter: FILTER_TODO.SHOW_ALL
}

const TodoContainer = () => {
  /** useRedux - create a state for the context created and actions that dispatch to reducers,
   *  this useReducer receive two params : the reducer and initial State */
  const [state, dispatch] = useReducer(reducerTodo, initalState)

  function add (value) {
    dispatch(addTodo(value))
  }

  function remove (id) {
    dispatch(removeTodo(id))
  }

  function toggle (id) {
    dispatch(toggleTodo(id))
  }

  function filter (filter) {
    dispatch(filterTodo(filter))
  }

  return (
    <mycontext.Provider value={state}>
    {/** mycontext is the context create */}

    <div className='todo-container'>
      <div className='form-container flex-column-center' >
        <h2>TODO FORM</h2>
        <TodoForm add={add}></TodoForm>
      </div>

      <div className='list-todo flex-column-center'>
        <div className='filter-todo'>
            <button onClick={() => filter(FILTER_TODO.SHOW_ALL)} >Show All</button>
            <button onClick={() => filter(FILTER_TODO.SHOW_ACTIVE)}>Show Active</button>
            <button onClick={() => filter(FILTER_TODO.SHOW_COMPLETED)}>Show Completed</button>
        </div>
        <ListTODO remove={remove} toggle={toggle} />
      </div>
    </div>

    </mycontext.Provider>
  )
}

ListTODO.propTypes = {
  remove: propTypes.func.isRequired,
  toggle: propTypes.func.isRequired
}
export default TodoContainer
