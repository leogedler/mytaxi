import { combineReducers } from 'redux';
import mytaxi from './mytaxi';
import car2go from './car2go';

export default combineReducers({
    mytaxi,
    car2go
});