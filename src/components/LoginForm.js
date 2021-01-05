import React, { useState } from 'react';
import * as yup from 'yup';
import loginSchema from '../validation/LoginFormSchema';
import styled from 'styled-components';

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
            <StyledForm onSubmit = {uponSubmitLogin}>
                <h2>Welcome Back</h2>
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
                <button>Sign In</button>
            </StyledForm>
            
            <div className = 'errors-container'>
                <p>{loginErrors.username}</p>
                <p>{loginErrors.password}</p>
            </div>
        </div>
    )
};


const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2% 25% 2% 25%;
    background-color: #e5ffe5;
    padding: 3% 10% 5% 10%;

    h2{
        color: #384f94;
    }

    label{
        margin: 2%;
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #578a42;
    }

    button{
        background-color: #90a1d5;
        border-radius: 5px;
        margin: 5% 45% 3% 2%;
    }

`

export default LoginForm;