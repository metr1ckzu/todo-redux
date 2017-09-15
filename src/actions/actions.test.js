import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import { fetchTodos, deleteTodo, addTodo } from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async action creators', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('fetchTodos async test', function (done) {
      const fetchedData = [{id: 1, text: 'kek'}]
      const expectedActions = [{type: 'FETCHED_TODOS', fetchedData}]
      const store = mockStore({todos: []})

      store.dispatch(fetchTodos())

      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: fetchedData
        }).then(function () {
          expect(store.getActions()).toEqual(expectedActions)
          done()
        })
      })
    })

  it('deleteTodo async test', (done) => {
    const expectedActions = [{type: 'DELETE_TODO', id: 1}]
    const store = mockStore({todos: []})

    store.dispatch(deleteTodo(1))

    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200
      }).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })


  it('addTodo async test', (done) => {
    const id = Date.now()
    const text = 'kek'
    const expectedActions = [{type: 'ADD_TODO', id: id, text}]
    const store = mockStore({todos: []})

    store.dispatch(addTodo(text))

    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200
      }).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
        done()
      })
    })
  })
})
