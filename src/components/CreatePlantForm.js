import React, { useState } from "react";
import * as yup from "yup";
import createPlantSchema from "../validation/CreatePlantFormSchema";
import styled from "styled-components";
import axios from "axios";
import { axiosWithAuth } from "../AxiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPlant } from "../actions";

// Create Plant Form Empty Objects
const blankCreatePlantForm = {
  nickname: "",
  species: "",
  frequency: "",
};

const initialCreatePlantErrors = {
  nickname: "",
  species: "",
  frequency: "",
};

function CreatePlantForm(props) {
  const { push } = useHistory();
  const userInfo = useSelector((state) => state);
  const dispatch = useDispatch();
  // Create Plant Form UseState and event handlers

  const [createPlantFormValues, setCreatePlantFormValues] = useState(
    blankCreatePlantForm
  );
  const [newPlant, setNewPlant] = useState([]);
  const [createPlantErrors, setCreatePlantErrors] = useState(
    initialCreatePlantErrors
  );

  const changeCreatePlantValues = (event) => {
    const { name, value } = event.target;
    updateCreatePlantForm(name, value);
  };

  const uponSubmitCreatePlant = (event) => {
    event.preventDefault();
    submitCreatePlantForm();
  };

  const updateCreatePlantForm = (name, value) => {
    yup
      .reach(createPlantSchema, name)
      .validate(value)
      .then(() => {
        setCreatePlantErrors({ ...createPlantErrors, [name]: "" });
        setCreatePlantFormValues({ ...createPlantFormValues, [name]: value });
      })
      .catch((error) => {
        setCreatePlantErrors({ ...createPlantErrors, [name]: error.errors[0] });
      });
  };

  const submitCreatePlantForm = () => {
    const createPlantInfo = {
      nickname: createPlantFormValues.nickname,
      species: createPlantFormValues.species,
      frequency: createPlantFormValues.frequency,
      user_id: userInfo.id,
    };
    axiosWithAuth()
      .post("https://plantswater.herokuapp.com/api/plants", createPlantInfo)
      .then((res) => {
        dispatch(addPlant(res.data));
        push("/dashboard");
      })
      .catch((err) => {});

    setCreatePlantFormValues(blankCreatePlantForm);
  };

  return (
    <StyledDiv>
      <StyledPlantForm onSubmit={uponSubmitCreatePlant}>
        <label>
          {" "}
          Nickname
          <input
            name="nickname"
            type="text"
            value={createPlantFormValues.nickname}
            onChange={changeCreatePlantValues}
          />
        </label>

        <label>
          {" "}
          Species
          <input
            name="species"
            type="text"
            value={createPlantFormValues.species}
            onChange={changeCreatePlantValues}
          />
        </label>

        <label>
          {" "}
          Water Frequency
          <input
            name="frequency"
            type="number"
            value={createPlantFormValues.frequency}
            onChange={changeCreatePlantValues}
          />
        </label>
        <button>Save</button>

        <ErrorsDiv>
        <p>{createPlantErrors.nickname}</p>
        <p>{createPlantErrors.species}</p>
        <p>{createPlantErrors.frequency}</p>
      </ErrorsDiv>
      </StyledPlantForm>

      
    </StyledDiv>
  );
}

// CSS Styles

const StyledDiv = styled.div`
  background-image: url(https://images.unsplash.com/photo-1603436326446-74e2d65f3168?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=706&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10% 0 20.7% 0;
  margin: -11% 0 -11% 0;
`

const StyledPlantForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30% 0 30%;
  padding: 4% 10% 4% 10%;
  background-color: rgba(229, 255, 229, 0.8);

  label {
    margin: 2%;
    display: flex;
    flex-direction: column;
    text-align: left;
    color: #384f94;
    font-weight: bold;
  }

  button {
    background-color: #384f94;
    border-radius: 5px;
    margin: 5% 28% 3% 28%;
    color: rgb(229, 255, 229);
    font-weight: bold;
    padding: 1% 0 1% 0;
  }
`;
const ErrorsDiv = styled.div`
  margin: 0 5% 5% 5%;

  p {
    color: red;
    font-weight: bolder;
  }
`;

export default CreatePlantForm;
