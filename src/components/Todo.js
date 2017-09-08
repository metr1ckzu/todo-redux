import React from 'react'

const icon = '\u2716'
const Todo = ({ onClick, text }) => (
  <li>
    {text}<button onClick={onClick}>{icon}</button>
  </li>

)

export default Todo
