/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../client/src/components/App.jsx';
import Foo from './foo.jsx';

// const fetch = require('node-fetch');
const fetch = require('jest-fetch-mock');
configure({ adapter: new Adapter() });

describe('Testing front-end', () => {

  test('App component should exist', () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    const wrapper = shallow(<App />);
    expect(wrapper).toEqual({});
  });

  test('Dummy component should exist', () => {
    const anotherWrapper = shallow(<Foo />);
    const text = anotherWrapper.find('div div');
    expect(text.text()).toBe('Bar');
  });
});