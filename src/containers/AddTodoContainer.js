import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapDispatchToProps = {
  addTodo: addTodo
}

let AddTodoContainer = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodoContainer
