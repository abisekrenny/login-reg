import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './Login'
import { Register } from './Register'

function App() {
  const [currentform, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
      <div className='App'>
        <div className='container'>
          <div className='col'>
          {
          currentform === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
          </div>
          <div className='col'></div>
        </div>
       
      </div>
     
  );
}

export default App
