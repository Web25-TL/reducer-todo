import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../test/test.utils.js'
import Nav from './Nav.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Nav {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-nav")
    expect(component.length).toBe(1)
  });