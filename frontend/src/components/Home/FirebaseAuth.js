import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const FirebaseAuth = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBw8kt53iwe5erjm8PhJWIEiVj0CR2cjqE",
    authDomain: "sasticheezeecom.firebaseapp.com",
    projectId: "sasticheezeecom",
    storageBucket: "sasticheezeecom.appspot.com",
    messagingSenderId: "423070962695",
    appId: "1:423070962695:web:34b2a469857173a41186a2",
    measurementId: "G-5ZC8XBCZZH",
  };
  const app = initializeApp(firebaseConfig);
  //   const analytics = getAnalytics(app);
  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const FacebookLogin = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        // history.push("/");
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const TwitterLogin = () => {
    const provider = new TwitterAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
        }}
        onClick={GoogleLogin()}
      >
        Google
      </p>
      <p onClick={FacebookLogin()}>Facebook</p>
      <p onClick={TwitterLogin()}>Twitter</p>
    </div>
  );
};

export default FirebaseAuth;
