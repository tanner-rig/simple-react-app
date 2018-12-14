import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = shallow(<App />);

describe('App', () => {
  test('renders without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
