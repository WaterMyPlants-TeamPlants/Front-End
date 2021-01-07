import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../AxiosWithAuth";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom"

export default function App() {
  const [frequency, setFrequency] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [species, setSpecies] = React.useState("");
  const [water, setWater] = React.useState("");

  const EditPlant = ({ errors, touched, status }) => {
    const [newPlant, addNewPlant] = useState([]);

    useEffect(() => {
      if (status) {
        addNewPlant([...newPlant, status]);
      }
    }, [newPlant, status]);
  };

  const handleSubmit = event => {
    console.log(`
      Frequency: ${frequency}
      Nickname: ${nickname}
      Species: ${species}
      Water: ${water}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Plant</h1>

      <label>
        Frequency
        <input
          name="frequency"
          type="number"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          required
        />
      </label>

      <label>
        NickName
        <input
          name="nickname"
          type="text"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          required
        />
      </label>

      <label>
        Species
        <input
          name="species"
          type="text"
          value={species}
          onChange={e => setSpecies(e.target.value)}
          required
        />
      </label>

      <label>
        Water Intake
        <input
          name="waterintake"
          type="text"
          value={water}
          onChange={e => setWater(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}





