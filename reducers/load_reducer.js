import {
  LOAD_ALL_USER_DATA
} from '../actions/types';

export default function (state = {}, action) {
  console.log(action.type);
  switch (action.type) {
    case LOAD_ALL_USER_DATA:
      return { user: action.payload };
    default:
      return state;
  }
}
