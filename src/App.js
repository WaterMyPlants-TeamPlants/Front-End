import './App.css';
import React, { useState } from 'react';
import * as yup from 'yup';
import LoginForm from './components/LoginForm'

// Login Form Initial Objects
const blankLoginForm = {
  username: '',
  password: '',
}

function App() {

  // Login Form Use States
  const [loginFormValues, setLoginFormValues] = useState(blankLoginForm);

  return (
    <div className="App">
      <LoginForm loginValues = {loginFormValues}/>
    </div>
  );
}

export default App;
