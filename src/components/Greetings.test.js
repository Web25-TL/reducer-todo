import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../test/test.utils.js'
import Greetings from './Greetings.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Greetings {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-greetings")
    expect(component.length).toBe(1)
  });