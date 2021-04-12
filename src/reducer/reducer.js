import { combineReducers } from 'redux';
import contacts from './contacts/reducer';
import user from './auth/reducer';

export default combineReducers({
  contacts,
  user,
});
