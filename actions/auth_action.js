import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';

import { FACEBOOK_LOGIN_SUCCESS } from './types';
import KEYS from '../keys.json'

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin();
  }
};

const doFacebookLogin = async () => {
  let result = await Facebook.LogInWithReadPermissionsAsync(KEYS.FACEBOOK_APP_ID);

};
