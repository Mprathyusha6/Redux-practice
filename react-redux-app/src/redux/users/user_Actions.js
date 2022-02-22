import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

export const FetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const FetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const FetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(FetchUsersSuccess(users));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(FetchUsersFailure(errormsg));
      });
  };
};
