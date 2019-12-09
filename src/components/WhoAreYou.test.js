import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from '../test/test.utils.js'
import WhoAreYou    from './WhoAreYou.js'

const setup = (props={}, state=null) => {
    const wrapper = shallow(<WhoAreYou    {...props} />)
    return wrapper;
  }
  
  test('renders App without errors', () => {
    const wrapper = setup();
    const component = findByTestAttrs(wrapper, "component-who-are-you")
    expect(component.length).toBe(1)
  });