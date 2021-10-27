import axios from "axios";

const getAllUsers = (limit) => async (dispatch) => {
  dispatch({ type: "GET_USERS_REQ" });
  try {
    let queryResult = await axios.get(`https://fakestoreapi.com/users?limit=${limit}`);
    if (queryResult) {
      console.log(queryResult.data);
      dispatch({ type: "GET_USERS_SUCCESS", payload: queryResult.data});
    }
  } catch (err) {
    console.log("error", err);
    dispatch({ type: "GET_USERS_FAILURE", err });
  }
};

const action={
    getAllUsers,
  };
  export default action;