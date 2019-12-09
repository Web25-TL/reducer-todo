import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../../test/test.utils.js'
import Todo from './Todo.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Todo {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-todo")
    expect(component.length).toBe(1)
  });