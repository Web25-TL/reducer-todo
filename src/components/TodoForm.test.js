import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../test/test.utils.js'
import TodoForm from './TodoForm.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<TodoForm {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-todo-form")
    expect(component.length).toBe(1)
  });