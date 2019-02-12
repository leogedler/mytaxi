import React from 'react';
import { mount } from 'enzyme';
import Car2goView from '../components/car2go';
import Map from '../components/map';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from '../Root';


let wrapped;
beforeEach(() => {
  const initialState = {
    car2go: {
      car2goVehicules: [{
        "address": "Lesserstraße 170, 22049 Hamburg",
        "coordinates": [
          10.07526,
          53.59301,
          0
        ],
        "engineType": "CE",
        "exterior": "UNACCEPTABLE",
        "fuel": 42,
        "interior": "UNACCEPTABLE",
        "name": "HH-GO8522",
        "vin": "WME4513341K565439",
        "id": 1833240479
      }]
    }
  };
  wrapped = mount(<Root initialState={initialState}><Router><Car2goView /></Router></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('should render car2go table with elements', () => {
  expect(wrapped.find('tr td').first().text()).toEqual('1833240479');
});

it('Car2goView shows a Map', () => {
  expect(wrapped.find(Map).length).toEqual(1);
});