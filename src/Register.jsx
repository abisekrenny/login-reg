import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const [name,Setname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <br/>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>Full name</label><br/>
                <input value={name} name="name" id="name" placeholder="Full Name" /><br/>
                <label htmlFor="email">Email</label><br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/><br/>
                <label htmlFor="password">Password</label><br/>
                <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" placeholder="Atleast 8 Characters" id="password" name="password"/><br/>
                <button type="submit">Login</button>
            </form>
            <br/>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}