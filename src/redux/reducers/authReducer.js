import {
  LOGIN_FALIED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_USER,
} from "../actionTypes";

const initialState = {
  user: null,
  profile: null,
  isLoggedin: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: action.payload,
      };
    case LOGIN_FALIED:
      return {
        ...state,
        isLoggedin: false,
        user: null,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        profile: null,
        isLoggedin: false,
      };
    default:
      return state;
  }
};
