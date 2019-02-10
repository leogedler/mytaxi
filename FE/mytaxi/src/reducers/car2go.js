import { FECH_CAR2GO_VEHICULES, FILTER_CAR2GO_VEHICULES } from '../actions/types';

const INITIAL_STATE = {
  car2goVehicules: [],
};

let VEHICULES = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FECH_CAR2GO_VEHICULES:
      VEHICULES = action.payload.placemarks;
      return { car2goVehicules: action.payload.placemarks };

    case FILTER_CAR2GO_VEHICULES:
      let car2goVehicules = VEHICULES;
      if (String(action.payload).length > 0) {
        car2goVehicules = car2goVehicules.filter(vehicule => String(vehicule.id).indexOf(action.payload) > -1)
      }
      return { car2goVehicules: [...car2goVehicules] }

    default:
      return state;
  }
};
