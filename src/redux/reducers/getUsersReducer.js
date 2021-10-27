import { initialState } from "../store/initialState";
const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_REQ":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "GET_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        allUsers: action.payload,
      };

    case "GET_USERS_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default getUsersReducer;
