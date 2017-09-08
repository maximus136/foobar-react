/* eslint "react/no-find-dom-node": "off" */

import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';
import 'ignore-styles';

describe('Footer', () => {
  let footer;

  beforeEach(() => {
    footer = mount(<Footer/>);
  });

  it('should be a footer', () => {
    expect(footer.find('footer').length > 0).toEqual(true);
  });
});
