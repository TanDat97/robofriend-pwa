import React from 'react';
import { shallow, mount, reder } from 'enzyme';
import CardList from './CardList';

it('snapshot cardlist component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>).debug()).toMatchSnapshot();
})
