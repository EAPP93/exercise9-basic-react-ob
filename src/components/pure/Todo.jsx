import React from 'react'
import propTypes from 'prop-types'
import btnDelete from './icons8-delete-16.svg'

const Todo = ({ todo, remove, toggle }) => {
  return (
    <li style={
      {
        listStyle: 'none',
        textDecoration: todo.completed ? 'line-through' : 'none',
        textDecorationColor: todo.completed ? 'red' : 'none',
        color: todo.completed ? 'red' : 'black'
      }
    }>
      <p onClick={() => toggle(todo.id)}>{todo.text}</p>
      <button onClick={() => remove(todo.id)} style={
        {
          backgroundImage: `url(${btnDelete})`,
          width: '1rem',
          height: '1rem'
        }
      }></button>
    </li>
  )
}

Todo.propTypes = {
  todo: propTypes.object.isRequired,
  toggle: propTypes.func.isRequired,
  remove: propTypes.func.isRequired
}
export default Todo
