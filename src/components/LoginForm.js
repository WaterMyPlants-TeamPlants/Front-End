import React, { useState } from "react";
import * as yup from "yup";
import loginSchema from "../validation/LoginFormSchema";
import styled from "styled-components";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveUser } from "../actions";

// Login Form Initial Objects
const blankLoginForm = {
  username: "",
  password: "",
};

const initialLoginErrors = {
  name: "",
  password: "",
};

function LoginForm(props) {
  const dispatch = useDispatch();
  const { push } = useHistory();
  // Login Form Use States and event handlers
  const [loginFormValues, setLoginFormValues] = useState(blankLoginForm);
  const [user, setUser] = useState([]);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const changeLoginValues = (event) => {
    const { name, value } = event.target;
    updateLoginForm(name, value);
  };

  const uponSubmitLogin = (event) => {
    event.preventDefault();
    submitLoginForm();
  };

  const updateLoginForm = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => {
        setLoginErrors({ ...loginErrors, [name]: "" });
      })
      .catch((error) => {
        setLoginErrors({ ...loginErrors, [name]: error.errors[0] });
      });
    setLoginFormValues({ ...loginFormValues, [name]: value });
  };

  const submitLoginForm = () => {
    const userLoginInfo = {
      username: loginFormValues.username,
      password: loginFormValues.password,
    };
    Axios.post("https://plantswater.herokuapp.com/api/login", userLoginInfo)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        dispatch(saveUser(res.data.user));
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoginFormValues(blankLoginForm);
  };
  const pushToSignUp = () => {
    push("/signup");
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={uponSubmitLogin}>
        <h2>Welcome Back</h2>
        <label>
          {" "}
          Username
          <input
            name="username"
            type="text"
            value={loginFormValues.username}
            onChange={changeLoginValues}
          />
        </label>

        <label>
          {" "}
          Password
          <input
            name="password"
            type="password"
            value={loginFormValues.password}
            onChange={changeLoginValues}
          />
        </label>
        <button>Sign In</button>
        <button onClick={pushToSignUp}>Register</button>

        <LoginErrorsDiv className="errors-container">
        <p>{loginErrors.username}</p>
        <p>{loginErrors.password}</p>
      </LoginErrorsDiv>
      </StyledForm>

      
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
    background-image: url("https://images.unsplash.com/photo-1464465474479-26aa7f69b834?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20%;
    margin: -11% 0 0 0;

`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 22% 2% 22%;
  background-color: rgba(229, 255, 229, 0.7);
  padding: 5% 10% 5% 10%;
  
  h2 {
    color: #384f94;
    font-family: cursive;
    font-size: 1.9rem;
  }

  label {
    margin: 2%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #578a42;
  }

  button {
    background-color: #90a1d5;
    border-radius: 5px;
    margin: 5% 45% 3% 2%;
    color: #ffffff;
  }
`;
const LoginErrorsDiv = styled.div`
  
  p {
    color: red;
    font-weight: bolder;
    font-size: 1.2rem;
  }
`;

export default LoginForm;
