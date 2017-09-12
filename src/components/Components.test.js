import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers'

import Title from './Title'
import Todo from './Todo'
import TodoList from './TodoList'
import App from './App'
import GetTodosButton from './GetTodosButton'


describe('Components test', () => {
  describe('Title test', () => {
    it('Title must render h1', () => {
      const wrapper = shallow(<Title />)
      expect(wrapper.contains([
          <h1>Redux Todo</h1>
      ])).toEqual(true)
    })
  })

  describe('Todo test', () => {
    it('Must render li elements', () => {
      const wrapper = shallow(<Todo text='kek'/>)
      expect(wrapper.contains([
        <li>kek</li>
      ]))
    })
  })

  describe('TodoList test', () => {
    function setup() {
      const props = {
        onTodoClick : jest.fn(),
        todos: [{id: 1, text: 'kek'}]
      }
      const wrapper = mount(<TodoList {...props}/>)

      return {
        props,
        wrapper
      }
    }

    it('Must render todos and handle actions', () => {
      const { props, wrapper } = setup()
      wrapper.find('button').simulate('click')
      expect(props.onTodoClick.mock.calls.length).toBe(1)
    })
  })

  describe('App test', () => {
    it('renders w/o crashing', () => {
      const store = createStore(todoApp)
      const wrapper = mount(<Provider store={store}><App /></Provider>)
      // expect(wrapper.contains(<Title />)).toEqual(true)
      // expect(wrapper.contains().toEqual(true)
      // expect(wrapper.contains(<GetTodosButton />)).toEqual(true)
      // expect(wrapper.contains(<Component />)).toEqual(true)
    })
  })

  describe('GetTodosButton', () => {
    function setup() {
      const props = {
        onClick : jest.fn(),
      }
      const wrapper = mount(<GetTodosButton {...props}/>)

      return {
        props,
        wrapper
      }
    }
    it('Should render and retrive todos', () => {
      const { props, wrapper } = setup()
      wrapper.find('button').simulate('click')
      expect(props.onClick.mock.calls.length).toBe(1)
    })
  })

})
