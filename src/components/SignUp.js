import React from "react";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import {useHistory} from 'react-router-dom';
//Import From
import { 
  Input,
  Heading,
  FormDiv,
  Button,
  Label,
  Error
} from './StyledComponents'


const SignUp = props => {
  const {push} = useHistory();
  const pushToSignIn = () => {
    push('/login');
}
  const { errors, touched, values } = props;
  return (
    <>
      <FormDiv>
      <Heading>Let's get Savvy</Heading>
        <Label>User Name</Label>
        <Input type="text" name="username"/>
        {touched.username && errors.username && (
          <Error>{errors.username}</Error>
        )}
        <Label>Phone Number</Label>
        <Input type="text" name="phonenumber"/>
        {touched.phonenumber && errors.phonenumber && (
          <Error>{errors.phonenumber}</Error>
        )}
        <Label>Password</Label>
        <Input type="password" name="password"/>
        {touched.password && errors.password && (
          <Error>{errors.password}</Error>
        )}
        <Label>Confirm Password</Label>
        <Input type="password" name="password2"/>
        {touched.password2 && errors.password2 && (
          <Error>{errors.password2.slice(49, 69)}</Error>
        )}
        <Button type="submit">Sign Up</Button>
        <Button onClick={pushToSignIn}>Back</Button>
      </FormDiv>
    </>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      username: values.username || "",
      password: values.password || "",
      password2: values.password2 || "",
      phonenumber: values.phonenumber || "",
    };
  },
  validationSchema: yup.object().shape({
    username: yup
      .string()
      .min(5, "your username must have at least 5 characters")
      .required(),
    password: yup
      .string()
      .min(8, "password must be at least 8 characters")
      .required("enter and confirm password"),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null, "passwords must match"])
      .required(),
    phonenumber: yup
      .number()
      .positive()
      .required(),
  }),
  validateOnChange: false,
  validateOnBlur: false,
  handleSubmit: (values, { props, resetForm }) => {
    console.log(props);
    let userObj = {
      username: values.username,
      password: values.password,
      telephone: values.phonenumber
    };
    axios
      .post(
        "https://plantswater.herokuapp.com/api/register",
        userObj
      )
      .then(res => {
        localStorage.setItem("token", res.data.token);
        resetForm();
        return props.history.push("/registered");
      })
      .catch(err => {
        return err.response;
      });
  }
})(SignUp);