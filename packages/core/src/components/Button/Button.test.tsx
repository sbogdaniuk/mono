import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button'

describe('<Button />', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <Button />
    );

    expect( wrapper.find( '.button' ).length ).toBe( 1 );
  })
})
