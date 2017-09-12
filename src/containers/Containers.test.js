import React from 'react'
import { shallow, mount } from 'enzyme'
import { AddTodo } from './AddTodo'
import { GetTodosContainer } from './GetTodos'


describe('Containers test', () => {
  describe('AddTodo test', () => {

    function setup() {
      const props = {
        addTodo: jest.fn()
      }
      const wrapper = mount(<AddTodo {...props}/>)
      return {
        props,
        wrapper
      }
    }

    it('it should add todos', () => {
      const { props, wrapper } = setup()
      // const wrapper.find('form').input.value = 'kek'
      // const inputForm = wrapper.find('input')
      // inputForm.node.value = 'kek'
      // console.log(wrapper.find('form'))

    })
  })

  // describe('GetTodosContainer test', () => {
  //   function setup() {
  //     const props = {
  //       dispatch: jest.fn()
  //     }
  //     const wrapper = shallow(<GetTodosContainer {...props}/>)
  //     return {
  //       props,
  //       wrapper
  //     }
  //   }
  //
  //   it('Must fetch todos from api', () => {
  //     const { props, wrapper } = setup()
  //     expect(props.dispatch.mock.calls.length).toBe(1)
  //     const spy = jest.spyOn(props.dispatch, 'fetchTodos')
  //     expect(spy).toHaveBeenCalled()
  //   })
  //
  // })
})
