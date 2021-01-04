import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router';
import styled from 'styled-components';

import SignUp from './components/SignUp.js'; // Mona //
import EditPlant from './components/EditPlant.js'; // Mona //



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
    </div>
  );
}

export default App;
