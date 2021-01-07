import React, { useState } from 'react';
import * as yup from 'yup';
import createPlantSchema from '../validation/CreatePlantFormSchema';
import styled from 'styled-components';
import axios from 'axios';
import {axiosWithAuth} from '../AxiosWithAuth';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { addPlant } from '../actions';

// Create Plant Form Empty Objects
const blankCreatePlantForm = {
    nickname: '',
    species: '',
    frequency: '',
}
  
const initialCreatePlantErrors = {
    nickname: '',
    species: '',
    frequency: '',
}

function CreatePlantForm(props) {
const {push} = useHistory();
const userInfo = useSelector((state) => state);
const dispatch = useDispatch();
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
          frequency: createPlantFormValues.frequency,
          user_id: userInfo.id
        }
        axiosWithAuth()
        .post('https://plantswater.herokuapp.com/api/plants',createPlantInfo)
        .then(res => {
            dispatch(addPlant(res.data));
            push('/dashboard');
        })
        .catch(err => {

        })
       
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
                    <input name = 'frequency' 
                     type = 'number' 
                     value = {createPlantFormValues.frequency} 
                     onChange = {changeCreatePlantValues} />
                </label>
                <button>Save</button>
            </StyledPlantForm>

            <ErrorsDiv>
                <p>{createPlantErrors.nickname}</p>
                <p>{createPlantErrors.species}</p>
                <p>{createPlantErrors.frequency}</p>
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