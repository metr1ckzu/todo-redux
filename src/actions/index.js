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
    axios.delete('http://localhost:3001/todos/'+id)
      .then(dispatch({type: 'DELETE_TODO', id}))
  }
}

export function addTodo(text) {
  return function(dispatch) {
    const id = Date.now();
    axios({
      method: 'POST',
      url: 'http://localhost:3001/todos/',
      data: {
        id: id,
        text: text
      }
    }).then(dispatch({type: 'ADD_TODO', id: id, text}))
  }
}
