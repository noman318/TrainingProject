import axios from "axios";
import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
const apiURL = "http://localhost:8000/api/v1/";
// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();

const postLogin = (data) => {
  return axios.post(`${apiURL}auth`, data);
};

const postRegister = (data) => {
  return axios.post(`${apiURL}users`, data);
};

const isLoggedIn = () => {
  let data = localStorage.getItem("_token");
  if (!data) {
    return false;
  } else {
    return true;
  }
};

const getToken = () => {
  return localStorage.getItem("_token");
};

const getUser = () => {
  try {
    return jwt_decode(localStorage.getItem("_token"));
  } catch (error) {
    return null;
  }
};
const isAdmin = () => {
  return !getUser() ? false : getUser().isAdmin;
};

const doLogout = () => {
  localStorage.removeItem("_token");
  window.location = "/";
  // navigate("/");
};

const addProduct = (data) => {
  console.log("0000000000000000000000000");
  return axios.post(`${apiURL}products`, data);
};

export {
  postLogin,
  postRegister,
  getToken,
  getUser,
  isLoggedIn,
  doLogout,
  isAdmin,
  addProduct,
};
