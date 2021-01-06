import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../AxiosWithAuth";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom"
//Styles Import//
import { Body, PlantForm, FieldInput, Button } from "./StyledComponents";

const EditPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);
  const { push } = useHistory();
  const pushToDash = () => {
    push("/dashboard");
  };
  return (
    <Body>
      <PlantForm>
        <h1>Edit Plant</h1>

        {touched.nickname && errors.nickname && (
          <p className="error">{errors.nickname}</p>
        )}
        <FieldInput type="text" name="nickname" placeholder="Nick Name" />

        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}
        <FieldInput type="text" name="species" placeholder="Species" />

        {touched.frequency && errors.frequency && (
          <p className="error">{errors.frequency}</p>
        )}
        <FieldInput type="text" name="frequency" placeholder="Water Intake" />

        <Button type="submit">Submit!</Button>
        <Button onClick={pushToDash}>Back to Dash</Button>
      </PlantForm>
    </Body>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    const id = values.location.pathname.slice(11);
    console.log("this is the id", id);
    return {
      nickname: values.nickname || "",
      species: values.species || "",
      frequency: values.frequency || "",
      id: id || "",
    };
  },
  validationSchema: yup.object().shape({
    nickname: yup.string(),
    species: yup.string(),
    frequency: yup.string(),
  }),
  handleSubmit: (values, { setStatus }) => {
    console.log(values);
    let value = {
      nickname: values.nickname,
      species: values.species,
      frequency: values.frequency,
    };
    axiosWithAuth()
      .put(`https://plantswater.herokuapp.com/api/plants/${values.id}`, value)
      .then((response) => {
        console.log(response);
        setStatus(response.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  },
})(EditPlant);
