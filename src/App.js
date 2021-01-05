import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import styled from 'styled-components';
import LoginForm from './components/LoginForm';
import CreatePlantForm from './components/CreatePlantForm';
import SignUp from './components/SignUp.js'; // Mona //
import EditPlant from './components/EditPlant.js'; // Mona //
import {createStore} from 'redux';
import Dashboard from './components/dashboard';
import Registered from './components/Registered';
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
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/createplant" component={CreatePlantForm} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path='/registered' component={Registered}/>
      </Content>
      </Router>
    </div>
  );
}

export default App;
