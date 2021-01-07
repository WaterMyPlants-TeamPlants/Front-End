import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
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

  const [image, setImage] = useState({ preview: "", raw: "" });

  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };
  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    });
  };

  return (
    <Body>
      <PlantForm>
        <h1>Edit Plant</h1>
        <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fa fa-plus-circle" />
            </span>
            <h5 className="text-center">Upload your photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <button onClick={handleUpload}>Upload</button>
      <br />
      
    </div>
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