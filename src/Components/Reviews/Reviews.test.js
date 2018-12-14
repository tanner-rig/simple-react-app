import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Reviews from './Reviews';

const mockStore = configureStore();
const reviews = {
  reviewsList: [
    {
      rating: 0.8,
      publish_date: '2016-09-05T23:25:47.642350Z',
      id: '9783221620868',
      body:
        'The fool doth think he is wise, but the wise man knows himself to be a fool.',
      author: 'Kaley Schiller'
    },
    {
      rating: 3.2,
      publish_date: '2016-09-04T23:25:47.642388Z',
      id: '9793364045824',
      body: 'Can one desire too much of a good thing?.',
      author: 'Fay Lemke'
    },
    {
      rating: 4.1,
      publish_date: '2016-09-03T23:25:47.642545Z',
      id: '9784620626604',
      body:
        "How bitter a thing it is to look into happiness through another man's eyes!",
      author: 'Tatyana Olson'
    }
  ],
  ratingAverage: 2.8
};

const wrapper = shallow(<Reviews store={mockStore(reviews)} />);

describe('Reviews', () => {
  test('renders without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  test('has reviews class', () => {
    expect(wrapper.hasClass('reviews'));
  });

  test('exports component for testing', () => {
    expect(Reviews).toBeTruthy();
  });
});
