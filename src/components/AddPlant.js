import react, { useState } from "react";
import axios from "axios";


const plantInfo = {
    nickname: "",
    species: '',
    frequency: '',
}


const AddPlant = () => {

    const [plant, setPlant] = useState(plantInfo)

    const Change = (evt) => {
        const correctValue = evt.target.value;
        setPlant({...plant,[evt.target.name] : correctValue})
        console.log(correctValue)
    }

    const postPlant = (newPlant) => {
        axios
        .post("", newPlant)
        .then((res) => {
            setPlant(plantInfo)
        })
        .catch((err) => {
            console.log(err)
            debugger;
        })
    }

    const Submit = (evt) => {
        evt.preventDefault()
        const newPlant = {
            nickname: plant.nickname.trim(),
            species: plant.species.trim(),
            frequency: plant.frequency.trim()
        }
        postPlant(newPlant)
    }

    return(
        <form>
            <label>nickname
                <input
                type="text"
                name="nickname"
                onChange={Change}
                value={plant.nickname}
                />
            </label>
            <br/>
            <label>species
                <input 
                type="text"
                name="species"
                onChange={Change}
                value={plant.species}
                />
            </label>
            <br/>
            <label>water frequency
                <input
                type="text"
                name="frequency"
                onChange={Change}
                value={plant.frequency}
                />
            </label>
            <br/>
            <button>Add Plant</button>
        </form>
    )
}

export default AddPlant;