/* eslint "react/no-find-dom-node": "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import Carousel from '../Carousel';
import 'ignore-styles';


describe('Carousel', () => {
  let carousel;

  beforeEach(() => {
    carousel = mount(<Carousel/>);
  });
  it('should render wrapper', () => {
    expect(carousel.find('carousel-wrapper').length > 0).toEqual(true);
  });
});
