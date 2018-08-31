import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
 } from './types';
import KEYS from '../keys.json';

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { token, type } = await Facebook.logInWithReadPermissionsAsync(KEYS.FACEBOOK_APP_ID, {
    permissions: ['public_profile', 'email']
  });
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  const auth = firebase.auth();
  const credential = await firebase.auth.FacebookAuthProvider.credential(token);
  auth.signInAndRetrieveDataWithCredential(credential).catch(error => {
    console.log(`ERROR ${error.message}`);
  });

  auth.onAuthStateChanged(user => {
    if (user != null) {
      const USER = JSON.stringify(user);
      console.log(`USER: ${USER}`);
    } else console.log('No USER');
  });
  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
