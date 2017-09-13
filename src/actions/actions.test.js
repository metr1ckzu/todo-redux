import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
import { fetchTodos, deleteTodo, addTodo } from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
// const axiosMock = new MockAdapter(axios)


describe('Actions', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })

  it('fetchTodos action test', (done) => {
    // moxios.stubRequest('/todos', {
    //   status: 200,
    //   response: [
    //     {id: 1, text: 'kek'}
    //   ]
    // })
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { id: 1, text: 'kek' },
      });
    });

    const expectedActions = [
      {type: 'FETCHED_TODOS', todos: {id: 1, text: 'kek'}}
    ]

    const store = mockStore({todos: []})
    // store.dispatch(fetchTodos())
    console.log(store.getState())
    return store.dispatch(fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    done()
    })
  })

  it('addTodo action test', () => {
    moxios.stubRequest('/todos', {
      status: 200,
    })
    let request = moxios.requests.mostRecent()
    const store = mockStore({todos: []})
    store.dispatch(addTodo('kek'))
    console.log(store.getState())

  })
})

// describe('Actions', () => {
//   var axiosMock = new MockAdapter(axios)
//
//   // beforeEach(() => {
//   //   axiosMock.reset()
//   // })
//
//   // afterEach(() => {
//   //   axiosMock.reset()
//   // })
//
//
//   it('fetches todos', () => {
//     const data = [{id: 1, test: 'kek0'}]
//     axiosMock.onGet('/todos').reply(200, {
//       todos: [
//         { id: 1, text: 'kek' }
//       ]
// });
//
//
//     const expectedActions = {type: 'FETCHED_TODOS', data }
//     const store = mockStore({todos: []})
//
//     return store.dispatch(fetchTodos()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
//
//
// })

// describe('async actions', () => {
//   afterEach(() => {
//     nock.cleanAll()
//   })
//
//   it('fetches todos', () => {
//     const data = [{id: 1, test: 'kek0'}]
//     nock('http://localhost:3001/')
//       .get('/todos')
//       .reply(200, data)
//
//     const expectedActions = [
//       {type: 'FETCHED_TODOS', data}
//     ]
//
//     const store = mockStore({todos: []})
//
//     return store.dispatch(fetchTodos()).then( () => {
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
//
// })
