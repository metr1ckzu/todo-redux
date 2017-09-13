import todos from './todos'

describe('todos reducer', () => {

  it('should return default', () => {
    expect(
      todos([{
        text: 'Run the default tests'
      }], {
        type: 'KEK_TODO'
      })
    ).toEqual([
      {text: 'Run the default tests'}
    ])
  })

  it('should add todos', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the add tests'
      })
    ).toEqual([
      {text: 'Run the add tests'}
    ])
  })

  it('should delete todos', () => {
    expect(
      todos([{
        text: 'Run the delete tests',
        id: 1
      }], {
        type: 'DELETE_TODO',
        id: 1,
      })
    ).toEqual([])
  })

  it('should fetch todos', () => {
    let fetchedData = {text: 'kek'}
    expect(
      todos([], {
        type: 'FETCHED_TODOS',
        fetchedData
      })
    ).toEqual([{text: 'kek'}])
  })

})

import { createStore } from 'redux'
import todoApp from './index'
let testStore = createStore(todoApp)

describe('combineReducers test', () => {
  expect(testStore.getState().todos).toEqual(todos(undefined, {}))
})
