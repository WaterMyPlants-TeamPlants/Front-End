import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import styled from 'styled-components';

import LoginForm from './components/LoginForm';
import CreatePlantForm from './components/CreatePlantForm';
import SignUp from './components/SignUp.js'; // Mona //
import EditPlant from './components/EditPlant.js'; // Mona //
import EditUser from "./components/EditUser"
import AddPlant from "./components/AddPlant"

const Content = styled.div`
  margin-top: 150px;
  @media (min-width: 700px) {
    margin-top: 100px;
  }
`;


function App() {

  return (
    <div className="App">
      <Router>
        <Content>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/editplant" component={EditPlant} />
        </Content>
      </Router>
      <LoginForm />
      <CreatePlantForm />
      <EditUser />
      <AddPlant />
    </div>
  );
}

export default App;
