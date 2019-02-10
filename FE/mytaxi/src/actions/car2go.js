import axios from 'axios';

import { FECH_CAR2GO_VEHICULES, FILTER_CAR2GO_VEHICULES } from './types';

const URL = 'http://localhost:5000';

export const fetchCar2goVehicules = callback => async dispatch => {
  try {
    const response = await axios.get(`${URL}/car2go/vehicles`);

    dispatch({
      type: FECH_CAR2GO_VEHICULES,
      payload: response.data
    })

  } catch (error) {
    console.log('error', error);
    callback(error);
  }
}

export const filterCar2goVehicules = text => {
  return {
    type: FILTER_CAR2GO_VEHICULES,
    payload: text
  }
}