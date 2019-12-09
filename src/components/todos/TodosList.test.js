import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../../test/test.utils.js'
import TodoList from './TodosList.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<TodoList {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-todo-list")
    expect(component.length).toBe(1)
  });