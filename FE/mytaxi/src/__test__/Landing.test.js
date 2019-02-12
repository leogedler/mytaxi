import React from 'react';
import { mount } from 'enzyme';
import Landing from '../components/landing';
import { BrowserRouter as Router } from 'react-router-dom';


let wrapped;
beforeEach(() => {
    wrapped = mount(<Router><Landing /></Router>);
});

afterEach(() => {
    wrapped.unmount();
});

it('show app title', () => {
    expect(wrapped.find('h3').text()).toEqual('React Mytaxi / Car2go test');
});

it('shows two cards', () => {
    expect(wrapped.find('.card').length).toEqual(2);
});