import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
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

  const { currentUser } = firebase.auth();

  console.log("currentUser"+JSON.stringify(currentUser));

  var db = firebase.firestore();

  // Disable deprecated features
  db.settings({ timestampsInSnapshots: true });

  var docRef = db.collection("users").doc(currentUser.uid);

  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          console.log("setting data");
          docRef.set({
              name: currentUser.displayName,
              email: currentUser.email,
              photo: currentUser.photoURL,
              labTime: 25,
              breakTime: 5,
              labsInRound: 5,
              longBreakTime: 25 });
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });

  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
