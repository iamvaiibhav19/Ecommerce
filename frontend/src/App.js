import "./App.css";
import React, { useEffect, useState } from "react";

import Footer from "./components/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";

import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products.js";
import Search from "./components/Search/Search.js";
import LoginSignUp from "./components/User/LoginSignUp";
import Profile from "./components/User/Profile";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Navbar from "./components/layout/Header/Navbar";
// import { isAuthenticatedUser } from "../../backend/middlewares/auth";
import UserOptions from "./components/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from "./components/User/ForgotPassword";
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./components/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <Navbar />

      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route exact path="/product/:id" element={<ProductDetails />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/products/:keyword" element={<Products />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/login" element={<LoginSignUp />}></Route>
        <Route exact path="/account" element={<Profile />}></Route>
        <Route exact path="/me/update" element={<UpdateProfile />}></Route>
        <Route
          exact
          path="/password/update"
          element={<UpdatePassword />}
        ></Route>
        <Route
          exact
          path="/password/forgot"
          element={<ForgotPassword />}
        ></Route>
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        ></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/login/shipping" element={<Shipping />}></Route>
        <Route exact path="/order/confirm" element={<ConfirmOrder />}></Route>
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route exact path="/process/payment" element={<Payment />}></Route>
          </Elements>
        )}
      </Routes>
    </Router>
  );
}

export default App;
