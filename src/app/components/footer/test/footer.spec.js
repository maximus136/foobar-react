/* eslint "react/no-find-dom-node": "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import {Footer} from '../footer';

describe('Footer', () => {
  let footer;

  beforeEach(() => {
    footer = mount(<Footer/>);
    console.log(footer);
  });
  it('should be a footer', () => {
    expect(footer.find('footer').length > 0).toEqual(true);
  });
});
