import React from 'react';
import { shallow, mount, reder } from 'enzyme';
import Card from './Card';

it('expect to render card component', () => {
  expect(shallow(<Card/>).length).toEqual(1)
})

it('snapshot card component', () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
})
