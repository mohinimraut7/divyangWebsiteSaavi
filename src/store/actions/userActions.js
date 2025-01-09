import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from '../../config/config';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

export const ADD_USER_REQUEST='ADD_USER_REQUEST';
export const ADD_USER_SUCCESS='ADD_USER_SUCCESS';
export const ADD_USER_ERROR='ADD_USER_ERROR';


const getToken = () => {
  const resdata = JSON.parse(localStorage.getItem('resdata'));
  return resdata ? resdata.token : null;
};
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error.message
});




export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get(`${baseUrl}/getUsers`);
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
      toast.error('Failed to fetch users');
    }
  };
};

export const addUserRequest=()=>({
  type:ADD_USER_REQUEST,
})

export const addUserSuccess=(user)=>({
  type:ADD_USER_SUCCESS,
  payload:user
})

export const addUserFailure=(error)=>({
  type:ADD_USER_ERROR,
  payload:error.message
})

export const addUser=(userData)=>{
 

  return async (dispatch)=>{

dispatch(addUserRequest());
try{
  // const token = getToken();
  const response = await axios.post(`${baseUrl}/addUser`, userData, 
  //   {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // }
);
  dispatch(addUserSuccess(response.data.user))
  toast.success("User Added Successfully", { position: "top-center" });

}catch(error){
  dispatch(addUserFailure(error));
  toast.error(error.response?.data?.message || "Error adding user", { position: "top-center" });
}
  }
}










