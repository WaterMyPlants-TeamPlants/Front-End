import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';

//Styles Import//
import { 
    Body,
    PlantForm,
    FieldInput,
    Button,
  } from './StyledComponents'

const EditPlant = ({ errors, touched, status }) => {
  const [newPlant, addNewPlant] = useState([]);

  useEffect(() => {
    if (status) {
      addNewPlant([...newPlant, status]);
    }
  }, [newPlant, status]);

  return (
    <Body>
      <PlantForm>
        <h1>Edit Plant</h1>
        {touched.number && errors.number && (
            <p className="error">{errors.number}</p>
        )}
        <FieldInput type="number" name="number" placeholder="Amount" />
        {touched.plant && errors.plant && (
          <p className="error">{errors.plant}</p>
        )}
        <FieldInput type="text" name="plant" placeholder="Nick Name" />

        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}
        <FieldInput type="text" name="species" placeholder="Species" />

        {touched.water && errors.water && (
          <p className="error">{errors.water}</p>
        )}
        <FieldInput type="text" name="water" placeholder="Water Intake" />

        <Button type="submit">Submit!</Button>
      </PlantForm>
    </Body>
  );
};

export default withFormik({
  mapPropsToValues: values => {
    return {
      number: values.number || '',
      plant: values.plant || '',
      species: values.species || '',
      water: values.water || ''
    };
  },
  validationSchema: yup.object().shape({
    number: yup.number(),
    plant: yup.string(),
    species: yup.string(),
    water: yup.string()
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
      .put('', values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
})(EditPlant);