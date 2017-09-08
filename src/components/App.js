import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import GetTodosButton from '../containers/GetTodosButton'
import Title from './Title'

const App = () => (
  <div>
    <Title />
    <VisibleTodoList />
    <AddTodo />
    <GetTodosButton />
  </div>
)

export default App
