/* eslint "react/no-find-dom-node": "off" */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import EmpCard from '../EmpCard';

describe('EmpCard', () => {
  let empCard;

  beforeEach(() => {
    empCard = mount(<EmpCard/>);
  });
  it('should render wrapper', () => {
    expect(empCard.find('.emp-card').length > 0).toEqual(true);
  });
});
