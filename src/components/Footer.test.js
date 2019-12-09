import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../test/test.utils.js'
import Footer    from './Footer'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<Footer    {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-footer")
    expect(component.length).toBe(1)
  });