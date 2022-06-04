import React from 'react'
import propTypes from 'prop-types'
const TodoForm = ({ add }) => {
  return (
    <form className='flex-column-center' onSubmit={(e) => {
      const text = document.getElementById('text')
      e.preventDefault()
      text.value !== '' ? add(text.value) : alert('ingrese texto')
      text.value = ''
    }}>
        <input
          type='text'
          placeholder='insert todo'
          id='text'
        ></input>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

TodoForm.propTypes = {
  add: propTypes.func.isRequired
}

export default TodoForm
