import './App.css';
import React, { useState } from 'react';
import * as yup from 'yup';
import LoginForm from './components/LoginForm';
import loginSchema from './validation/LoginFormSchema';
import CreatePlantForm from './components/CreatePlantForm';
import createPlantSchema from './validation/CreatePlantFormSchema';

// Login Form Initial Objects
const blankLoginForm = {
  username: '',
  password: '',
}

const initialLoginErrors = {
  name: '',
  password: '',
}

// Create Plant Form Empty Objects
const blankCreatePlantForm = {
  nickname: '',
  species: '',
  waterfrequency: '',
}

const initialCreatePlantErrors = {
  nickname: '',
  species: '',
  waterfrequency: '',
}


function App() {

  // Login Form Use States and event handlers
  const [loginFormValues, setLoginFormValues] = useState(blankLoginForm);
  const [user, setUser] = useState([]);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const updateLoginForm = (name, value) => {

    yup.reach(loginSchema, name)
     .validate(value)
     .then(() => {
       setLoginErrors({...loginErrors, [name]: '',})
     })
     .catch((error) => {
       setLoginErrors({...loginErrors, [name]: error.errors[0],})
     })

    setLoginFormValues({...loginFormValues, [name]: value});
  }

  const submitLoginForm = () => {
    const userLoginInfo = {
      username: loginFormValues.username,
      password: loginFormValues.password,
    }

    setUser(userLoginInfo);
    setLoginFormValues(blankLoginForm);
  }

  // Create Plant Form UseState and event handlers

  const [createPlantFormValues, setCreatePlantFormValues] = useState(blankCreatePlantForm);
  const [newPlant, setNewPlant] = useState([]);
  const [createPlantErrors, setCreatePlantErrors] = useState(initialCreatePlantErrors);

  const updateCreatePlantForm = (name, value) => {

    yup.reach(createPlantSchema, name)
     .validate(value)
     .then(() => {
       setCreatePlantErrors({...createPlantErrors, [name]: '',})
     })
     .catch((error) => {
       setCreatePlantErrors({...createPlantErrors, [name]: error.errors[0],})
     })

    setCreatePlantFormValues({...createPlantFormValues, [name]: value,});
  };

  const submitCreatePlantForm = () => {
    const createPlantInfo = {
      nickname: createPlantFormValues.nickname,
      species: createPlantFormValues.species,
      waterfrequency: createPlantFormValues.waterfrequency,
    }

    setNewPlant(createPlantInfo);
    setCreatePlantFormValues(blankCreatePlantForm);
  }


  return (
    <div className="App">
      <LoginForm loginValues = {loginFormValues}
       updateLogin = {updateLoginForm} 
       submitLogin = {submitLoginForm} 
       loginErrors = {loginErrors}/>
      <CreatePlantForm createPlantValues = {createPlantFormValues} 
      updateCreatePlant = {updateCreatePlantForm} 
      submitCreatePlant = {submitCreatePlantForm} 
      createPlantErrors = {createPlantErrors} />
    </div>
  );
}

export default App;
