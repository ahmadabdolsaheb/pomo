import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  LOAD_ALL_USER_DATA
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

  const { currentUser } = firebase.auth();

  console.log("currentUser"+JSON.stringify(currentUser));

  var db = firebase.firestore();

  // Disable deprecated features
  db.settings({ timestampsInSnapshots: true });

  var docRef = db.collection("users").doc(currentUser.uid);

  const userData = await docRef.get().then(doc => {
      if (doc.exists) {
          console.log("Found data:", doc.data());
          return doc.data();
      } else {
          console.log("set data");
          const defaultData = {
              name: currentUser.displayName,
              email: currentUser.email,
              photo: currentUser.photoURL,
              labTime: 25,
              breakTime: 5,
              labsInRound: 5,
              longBreakTime: 25 };
          docRef.set(defaultData);
          return defaultData;
      }
  }).catch(error => console.log('Error getting document:', error));

  console.log("USERERE" + JSON.stringify(userData));
  await AsyncStorage.setItem('fb_token', token);

  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  dispatch({ type: LOAD_ALL_USER_DATA, payload: userData });
};
