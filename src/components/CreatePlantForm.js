import React, { useState } from 'react';
import * as yup from 'yup';
import createPlantSchema from '../validation/CreatePlantFormSchema';
import styled from 'styled-components';

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

function CreatePlantForm(props) {

    // Create Plant Form UseState and event handlers

  const [createPlantFormValues, setCreatePlantFormValues] = useState(blankCreatePlantForm);
  const [newPlant, setNewPlant] = useState([]);
  const [createPlantErrors, setCreatePlantErrors] = useState(initialCreatePlantErrors);

    
    const changeCreatePlantValues = (event) => {
        const {name, value} = event.target;
        updateCreatePlantForm(name, value);
    };

    const uponSubmitCreatePlant = (event) => {
        event.preventDefault();
        submitCreatePlantForm();
    }

    const updateCreatePlantForm = (name, value) => {

        yup.reach(createPlantSchema, name)
         .validate(value)
         .then(() => {
           setCreatePlantErrors({...createPlantErrors, [name]: '',})
           setCreatePlantFormValues({...createPlantFormValues, [name]: value,});
         })
         .catch((error) => {
           setCreatePlantErrors({...createPlantErrors, [name]: error.errors[0],})
         })
    };
    
    const submitCreatePlantForm = () => {
        const createPlantInfo = {
          nickname: createPlantFormValues.nickname,
          species: createPlantFormValues.species,
          waterfrequency: createPlantFormValues.waterfrequency,
        }
    
        setNewPlant(createPlantInfo);
        setCreatePlantFormValues(blankCreatePlantForm);
    };

    return (
        <div>
            <StyledPlantForm onSubmit = {uponSubmitCreatePlant} >
                <label> Nickname
                    <input name = 'nickname' 
                     type = 'text' 
                     value = {createPlantFormValues.nickname} 
                     onChange = {changeCreatePlantValues} />
                </label>

                <label> Species
                    <input name = 'species' 
                     type = 'text' 
                     value = {createPlantFormValues.species} 
                     onChange = {changeCreatePlantValues} />
                </label>

                <label> Water Frequency
                    <input name = 'waterfrequency' 
                     type = 'text' 
                     value = {createPlantFormValues.waterfrequency} 
                     onChange = {changeCreatePlantValues} />
                </label>
                <button>Save</button>
            </StyledPlantForm>

            <ErrorsDiv>
                <p>{createPlantErrors.nickname}</p>
                <p>{createPlantErrors.species}</p>
                <p>{createPlantErrors.waterfrequency}</p>
            </ErrorsDiv>
        </div>
    )
};

// CSS Styles

const StyledPlantForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 2% 25% 2% 25%;
    padding: 3% 10% 5% 10%;

    label{
        margin: 2%;
        display: flex;
        flex-direction: column;
        text-align: left;
        color: #578a42;
    }

    button{
        background-color: #4b67bb;
        border-radius: 5px;
        margin: 5% 20% 3% 20%;
        color: #ffffff;
    }
`
const ErrorsDiv = styled.div`
    margin: 0 20% 5% 20%;

    p{
        color: red;
        font-weight: bolder;
    }
`

export default CreatePlantForm;