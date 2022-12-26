import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Registraion from "./components/Registration";
import Products from "./components/Products";
import Container from "@mui/material/Container";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./components/Home";
import { isAdmin, isLoggedIn } from "./services/MyData";
import { Navigate } from "react-router-dom";
import { Cart } from "./components/Cart";
import { AddProducts } from "./components/AddProducts";
import { EditProducts } from "./components/EditProducts";
import GetProductsById from "./components/GetProductsById";

function App() {
  const ProtectRoute = ({ children }) => {
    const auth = isLoggedIn();
    return auth ? children : <Navigate to="/" />;
  };

  const ProtectAdminRoute = ({ children }) => {
    const auth = isLoggedIn();
    const adminAuth = isAdmin();
    return auth && adminAuth ? children : <Navigate to="/" />;
  };
  return (
    <>
      <Router>
        <Header />
        <Container>
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registraion />} />
            <Route path="/products/:id" element={<GetProductsById />} />
            <Route
              path="/products"
              element={
                <ProtectRoute>
                  <Products />
                </ProtectRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectRoute>
                  <Cart />
                </ProtectRoute>
              }
            />
            <Route
              path="/addproducts"
              element={
                <ProtectAdminRoute>
                  <AddProducts />
                </ProtectAdminRoute>
              }
            />
            <Route
              path={`/editproducts/:id`}
              element={
                <ProtectAdminRoute>
                  <EditProducts />
                </ProtectAdminRoute>
              }
            />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
