import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Index from './index';

describe('Page <index />', () => {
  it('renders the text "Hello world!', () => {
    const wrapper = shallow(<Index />);
    const message = wrapper.find('span').props().children;
    expect(message).to.equal('Hello world!');
  });
});
