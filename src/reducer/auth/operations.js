import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// const token = {};

export const register = credentials => dispatch => {
  dispatch(actions.registerRequest());

  axios
    .post('/users/signup', credentials)
    .then(({ data }) => dispatch(actions.registerSuccess(data)))
    .catch(error => dispatch(actions.registerError(error.masege)));
};

export const login = credentials => dispatch => {
  dispatch(actions.loginRequest());

  axios
    .post('/users/login', credentials)
    .then(({ data }) => dispatch(actions.loginSuccess(data)))
    .catch(error => dispatch(actions.loginError(error.masege)));
};

export const logOut = () => dispatch => {};

export const getCurrentUser = () => dispatch => {};
