import React from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'

let GetTodosButton = ({ dispatch }) => (
  <button
    onClick={dispatch(fetchTodos())}
    >Get Todos</button>
)

GetTodosButton = connect()(GetTodosButton)

export default GetTodosButton
