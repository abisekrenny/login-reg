import React, { useEffect, useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [name, Setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      localStorage.setItem(email, pass)
  };
  function ShowUser() {
   var X = localStorage.getItem(email)
  for (var key in localStorage){
   console.log(key)
}  
}
  

  return (
    <>
      <div className="auth-form-container">
        <h2>Register</h2>
        <br />
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <br />
          <input
            value={pass}
            onChange={(e) => setpass(e.target.value)}
            type="password"
            placeholder="Atleast 8 Characters"
            id="password"
            name="password"
          />
          <button type="submit">Register</button>
          <button onClick={ShowUser}>Show User</button>
        </form>
        <br />
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
        
          Already have an account? Login here.
        </button>
      </div>
    </>
  );
};
export default localStorage;


// localStorage.setItem( 'user',JSON.stringify({ email, pass }));
// alert('Registered successfully!');