import axios from 'axios';

import { FECH_MY_TAXY_VEHICULES, FILTER_MY_TAXY_VEHICULES, } from './types';

const URL = 'http://localhost:5000';

export const fetchMyTaxiVehicules = callback => async dispatch => {
  try {
    const response = await axios.get(`${URL}/mytaxi/vehicles`);
    dispatch({
      type: FECH_MY_TAXY_VEHICULES,
      payload: response.data
    })

  } catch (error) {
    console.log('error', error);
    callback(error);
  }
}

export const filterMyTaxiVehicules = text => {
  return {
    type: FILTER_MY_TAXY_VEHICULES,
    payload: text
  }
}