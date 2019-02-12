import React from 'react';
import { mount } from 'enzyme';
import MytaxiView from '../components/mytaxiView';
import Map from '../components/map';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from '../Root';


let wrapped;
beforeEach(() => {
  const initialState = {
    mytaxi: {
      mytaxiVehicules: [{
        "id": 2056777518,
        "coordinate": {
          "latitude": 53.5532316,
          "longitude": 10.0087783
        },
        "state": "ACTIVE",
        "type": "TAXI"
      }]
    }
  };
  wrapped = mount(<Root initialState={initialState}><Router><MytaxiView /></Router></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('should render mytaxi table with elements', () => {
  expect(wrapped.find('tr td').first().text()).toEqual('2056777518');
});

it('MytaxiView shows a Map', () => {
  expect(wrapped.find(Map).length).toEqual(1);
});
