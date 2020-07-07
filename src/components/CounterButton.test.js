import React from 'react';
import { shallow, mount, reder } from 'enzyme';
import CounterButton from './CounterButton';

it('snapshot counterbutton component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />).debug()).toMatchSnapshot();
})

it('correct increment counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 1});
})