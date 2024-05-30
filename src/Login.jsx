import React, { useState } from "react";
import "./Login.css";


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === email && storedUser.pass === pass){
    alert('Login Sucessful!');
  }else{
    alert('Invalid email or Password');
  }
  };

  return (
    <>
    
    <div className="auth-form-container">
      <h2>Welcome Back</h2>
      <br/>
      
        Today is a new day.It's your day.You shape it.
        <br />
        Sign in to managing your projects.
      
      <br/>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br/>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <br/>
        <label htmlFor="password">Password</label>
        <br/>
        <input
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          type="password"
          placeholder="Enter Your Password"
          id="password"
          name="password"
        />
        <br />

        <button type="submit">Login</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
    </>
  );
};

export default Login;