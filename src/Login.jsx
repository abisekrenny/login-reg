import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);

    const storedUser = JSON.parse(localStorage.getItem("users"));
    console.log (storedUser);

    // const email = document.getElementById("email").value;
    // const password = document.getElementById("password").value;
    let user= storedUser.find((o) => {return o.email=== email});
    console.log(user);
    if (user && user.email === email && user.password === password) {
      alert('Login Sucessful!');
    }else{
      alert('Invalid email or Password');
    }
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>
          Welcome Back{" "}
          <object
            className="hand-wave-svg"
            data="src\assets\waving-hand.svg"
            width="30"
          />
        </h2>
        <br />
        <div className="login-description">
          <p className="mb-0">Today is a new day.It's your day.You shape it.</p>
          <p className="mb-0">Sign in to managing your projects.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="email"
              placeholder="Example@email.com"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="At least 8 characters"
            />
          </div>
          <br />
          <p className="forgot-pwd-control">
            <a href="#">Forgot password?</a>
          </p>
          <button type="submit" className="btn btn-dark">
            Sign in
          </button>
        </form>

        <div className="line-through-or">
          <p>
            <span>Or</span>
          </p>
        </div>

        <div className="sign-in-google-control">
          <button type="button" className="btn btn-light">
            <object data="src\assets\google_logo.png" width="20" />
            Sign in with Google
          </button>
        </div>

        <div className="sign-in-facebook-control">
          <button type="button" className="btn btn-light">
            <object data="src\assets\facebook_logo.svg" width="40" />
            Sign in with Facebook
          </button>
        </div>

        <p className="text-center register-btn-control">Don't you have an account? <a href="/register" >Sign up</a></p>

        <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here.
      </button>
      </div>
    </>
  );
};

export default Login;