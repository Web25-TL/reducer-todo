import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttrs} from './test/test.utils.js'
import App from './App';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  return wrapper;
}

test('renders App without errors', () => {
  const wrapper = setup();
  const component = findByTestAttrs(wrapper, "component-app")
  expect(component.length).toBe(1)
});
