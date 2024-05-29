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

// import React, { useState } from "react";

// export const Register = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password: pass,
//                 }),
//             });

//             if (response.ok) {
//                 // Registration successful, handle token (if provided)
//                 // Redirect to landing page or other route
//                 console.log('Registration successful!');
//                 props.onFormSwitch('login'); // Redirect to login page
//             } else {
//                 console.error('Registration failed');
//             }
//         } catch (error) {
//             console.error('Error during registration:', error);
//         }
//     };

//     return (
//         <div className="auth-form-container">
//             <h2>Register</h2>
//             <form className="register-form" onSubmit={handleSubmit}>
//                 <label>Full name</label>
//                 <input value={name} name="name" placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
//                 <label>Email</label>
//                 <input value={email} type="email" placeholder="youremail@gmail.com" onChange={(e) => setEmail(e.target.value)} />
//                 <label>Password</label>
//                 <input value={pass} type="password" placeholder="At least 8 Characters" onChange={(e) => setPass(e.target.value)} />
//                 <button type="submit">Register</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
//                 Already have an account? Login here.
//             </button>
//         </div>
//     );
// };
