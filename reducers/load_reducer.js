import {
  LOAD_ALL_USER_DATA
} from '../actions/types';

export default function (state = {}, action) {
  console.log('payload'+ action.payload);
  switch (action.type) {
    case LOAD_ALL_USER_DATA:
      return { userInfo: action.payload };
    default:
      return state;
  }
}
