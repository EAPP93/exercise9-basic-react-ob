import React, { useContext, useReducer } from 'react'
import propTypes from 'prop-types'

import TodoForm from '../pure/form/TodoForm'
import Todo from '../pure/Todo'

/** todo reducers and actions */
import reducerTodo from '../store/reducers/todo.reducer.js'
import { addTodo, removeTodo, toggleTodo } from '../store/actions/todo.actions'

/** a context is created for useContext */
const mycontext = React.createContext(null)

const ListTODO = ({ remove, toggle }) => {
  /** state context */
  const state = useContext(mycontext)
  return (
    (state.items.length > 0
      ? <ul>
          {
            state.items.map((todo, index) => (
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
  isLoanding: false
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

  console.log(state.items.length)

  return (
    <mycontext.Provider value={state}>
    {/** mycontext is the context create */}

    <div className='todo-container'>
      <div className='form-container flex' >
        <h1>TODO FORM</h1>
        <TodoForm add={add}></TodoForm>
      </div>

      <div className='list-todo flex'>
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
