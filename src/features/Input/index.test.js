import React from 'react';

import { shallow } from 'enzyme';

import { Input } from '.';

describe('Input component', () => {
  const props = {
    name: 'name',
    onChangeData: jest.fn,
    setError: jest.fn,
  }
  it('has type', () => {
    const type = 'string'
    const tree = shallow(<Input type={type} {...props} />);
    expect(tree.props().type).toBe(type);
  });
  
  it('is required input', () => {
    const tree = shallow(<Input type='string' required {...props} />);
    expect(tree.props().required).toBe(true);
  });
  
  it('has default value', () => {
    const value = 'Chuck'
    const tree = shallow(<Input type='string' value={value} {...props} />);
    expect(tree.props().defaultValue).toBe(value);
  });
});
