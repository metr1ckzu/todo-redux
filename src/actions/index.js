import axios from 'axios'

export function fetchTodos() {
  return function(dispatch) {
    axios.get('http://localhost:3001/todos')
      .then((response) => {
        const fetchedData = response.data
        dispatch({type: 'FETCHED_TODOS', fetchedData})
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
    const id = Date.now();
    dispatch({type: 'ADD_TODO', id: id, text})
    axios({
      method: 'POST',
      url: 'http://localhost:3001/todos/',
      data: {
        id: id,
        text: text
      }
    })
  }
}
