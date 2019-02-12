import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';
import Navbar from '../components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';


let wrapped;
beforeEach(() => {
  wrapped = mount(<Router><App /></Router>);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a navbar', () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it('shows the navbar title', () => {
  expect(wrapped.find('a.title_nav').text()).toEqual('Mytaxi / Car2go');
});

