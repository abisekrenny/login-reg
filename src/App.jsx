import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentform, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-between">
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
  );
}

export default App;
