import React, { useState } from 'react';
import * as yup from 'yup';
import loginSchema from '../validation/LoginFormSchema';

// Login Form Initial Objects
const blankLoginForm = {
    username: '',
    password: '',
}

const initialLoginErrors = {
    name: '',
    password: '',
}

function LoginForm(props) {

  // Login Form Use States and event handlers
  const [loginFormValues, setLoginFormValues] = useState(blankLoginForm);
  const [user, setUser] = useState([]);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);


    
    const changeLoginValues = (event) => {
        const {name, value} = event.target;
        updateLoginForm(name, value);
    };

    const uponSubmitLogin = (event) => {
        event.preventDefault();
        submitLoginForm();
    };

    const updateLoginForm = (name, value) => {

        yup.reach(loginSchema, name)
         .validate(value)
         .then(() => {
           setLoginErrors({...loginErrors, [name]: '',})
           setLoginFormValues({...loginFormValues, [name]: value});
         })
         .catch((error) => {
           setLoginErrors({...loginErrors, [name]: error.errors[0],})
         })
    }
    
    const submitLoginForm = () => {
        const userLoginInfo = {
          username: loginFormValues.username,
          password: loginFormValues.password,
        }
    
        setUser(userLoginInfo);
        setLoginFormValues(blankLoginForm);
    }


    return (
        <div>
            <form onSubmit = {uponSubmitLogin}>
                <label> Username
                    <input name = 'username'
                     type = 'text' 
                     value = {loginFormValues.username}
                     onChange = {changeLoginValues} />
                </label>

                <label> Password
                    <input name = 'password'
                     type = 'password' 
                     value = {loginFormValues.password} 
                     onChange = {changeLoginValues} />
                </label>
                <button>Submit</button>
            </form>
            
            <div className = 'errors-container'>
                <p>{loginErrors.username}</p>
                <p>{loginErrors.password}</p>
            </div>
        </div>
    )
};

export default LoginForm;