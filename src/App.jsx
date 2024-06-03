import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [currentform, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Login} />
          <Route path="/register" element={Register} />
        </Routes>
      </BrowserRouter>
      <div className="container-fluid">
        <div className="main-wrapper">
          <div className="col">
            {currentform === "login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )}
          </div>
          <div className="col img-bg">
            <img src="30a38887b0559dfb619dc9eba940a887.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;