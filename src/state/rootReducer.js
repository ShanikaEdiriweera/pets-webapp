import { combineReducers } from 'redux';
import petReducer from './pet/reducer';

const appReducer = combineReducers({
  pets: petReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;