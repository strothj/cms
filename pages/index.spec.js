import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Index from './index';

describe('Page <index />', () => {
  it('renders the text "Hello world!', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.props().children).to.equal('Hello world!');
  });
});
