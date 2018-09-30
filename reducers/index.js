import { combineReducers } from 'redux';
import auth from './auth_reducer';
import user from './load_reducer';

export default combineReducers({
  auth,
  user
});
