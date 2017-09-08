import axios from 'axios'

// const id = Date.now();
let nextTodoId = 0

export function fetchTodos() {
  return function(dispatch) {
    axios.get('http://localhost:3001/todos')
      .then((response) => {
        let todos = response.data
        dispatch({type: 'FETCHED_TODOS', todos})
      })
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({type: 'DELETE_TODO', id})
    axios.delete('http://localhost:3001/todos/'+id)
  }
}

export function addTodo(text) {
  return function(dispatch) {
    dispatch({type: 'ADD_TODO', id: nextTodoId++, text})
    axios({
      method: 'POST',
      url: 'http://localhost:3001/todos/',
      data: {
        id: nextTodoId,
        text: text
      }
    })
  }
}
