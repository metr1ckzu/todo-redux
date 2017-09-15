import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import { fetchTodos, deleteTodo, addTodo } from './index'
import sinon from 'sinon'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action creators', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('fetchTodos async test', () => {
    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      const store = mockStore({todos: [] })
      return store.dispatch(fetchTodos()).then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: {
            id: 1, text: 'kek'
          }
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })
  })

  it('fetchTodos moxios stub', () => {
    var payload = [{id: 1, text: 'kek'}]
    moxios.stubRequest('http://localhost:3001/todos', {
      status: 200,
      response: payload
    })
    const expectedActions = [
      {type: 'FETCHED_TODOS', payload}
    ]

    const store = mockStore({todos: []})

    return store.dispatch(fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})

describe('mockadapter', () => {

  it('fetchTodos mockadapter', () => {
    var mockkek = new MockAdapter(axios)
    var payload = {id: 1, text: 'kek'}
    mockkek.onGet('http://localhost:3001/todos').reply(200, payload)

    const expectedActions = [
      {type: 'FETCHED_TODOS', payload}
    ]

    const store = mockStore({todos: []})

    return store.dispatch(fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})
