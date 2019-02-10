import { FECH_MY_TAXY_VEHICULES, FILTER_MY_TAXY_VEHICULES } from '../actions/types';

const INITIAL_STATE = {
  mytaxiVehicules: [],
};

let VEHICULES = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FECH_MY_TAXY_VEHICULES:
      VEHICULES = action.payload.poiList;
      return { mytaxiVehicules: action.payload.poiList };

    case FILTER_MY_TAXY_VEHICULES:
      let mytaxiVehicules = VEHICULES;
      if (String(action.payload).length > 0){
        mytaxiVehicules = mytaxiVehicules.filter( vehicule => String(vehicule.id).indexOf(action.payload) > -1 )
      }
      return { mytaxiVehicules: [ ...mytaxiVehicules ] }

    default:
      return state;
  }
};
