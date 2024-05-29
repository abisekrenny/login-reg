import { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import { Testing } from "./Testing";

function App() {
  const [currentform, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
   <BrowserRouter>
   <Routes>
    {/* <Route path="/welcome" element={Welcome } /> */}
    <Route path="/" element={Login  } />
    <Route path="/register" element={Register } />
   </Routes>
   </BrowserRouter>
    <div className="container-fluid">
      {/* <Testing /> */}
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
