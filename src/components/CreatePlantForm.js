import React from 'react';

function CreatePlantForm(props) {

    const {createPlantValues, updateCreatePlant, submitCreatePlant, createPlantErrors} = props;

    const changeCreatePlantValues = (event) => {
        const {name, value} = event.target;
        updateCreatePlant(name, value);
    };

    const uponSubmitCreatePlant = (event) => {
        event.preventDefault();
        submitCreatePlant();
    }

    return (
        <div>
            <form onSubmit = {uponSubmitCreatePlant} >
                <label> Nickname
                    <input name = 'nickname' 
                     type = 'text' 
                     value = {createPlantValues.nickname} 
                     onChange = {changeCreatePlantValues} />
                </label>

                <label> Species
                    <input name = 'species' 
                     type = 'text' 
                     value = {createPlantValues.species} 
                     onChange = {changeCreatePlantValues} />
                </label>

                <label> Water Frequency
                    <input name = 'waterfrequency' 
                     type = 'text' 
                     value = {createPlantValues.waterfrequency} 
                     onChange = {changeCreatePlantValues} />
                </label>
                <button>Submit</button>
            </form>

            <div>
                <p>{createPlantErrors.nickname}</p>
                <p>{createPlantErrors.species}</p>
                <p>{createPlantErrors.waterfrequency}</p>
            </div>
        </div>
    )
};

export default CreatePlantForm;