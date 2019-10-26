import React from 'react';

import { shallow } from 'enzyme';

import { FormWrapper } from '.';

describe('FormWrapper component', () => {
  it('should render only one child', () => {
    const tree = shallow(<FormWrapper><div/></FormWrapper>);
    expect(tree.children()).toHaveLength(1);
  });
});
