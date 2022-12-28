import axios from "axios";
import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
const apiURL = "http://localhost:8000/api/v1/";
// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();

// const id = useParams(id)

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

const getProducts = () => {
  return axios.get(`${apiURL}products`);
};

const addProduct = (data) => {
  console.log("0000000000000000000000000");
  return axios.post(`${apiURL}products`, data);
};

const editProduct = (id, data) => {
  console.log(id);
  console.log(data);
  console.log("0000000000000000000000000");
  return axios.put(`${apiURL}products/${id}`, data);
};

const deleteProducts = (id) => {
  console.log(id);
  return axios.delete(`${apiURL}products/${id}`);
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
  getProducts,
  deleteProducts,
  editProduct,
};
