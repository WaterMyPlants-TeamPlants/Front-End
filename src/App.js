import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import CreatePlantForm from "./components/CreatePlantForm";
import SignUp from "./components/SignUp.js"; // Mona //
import EditPlant from "./components/EditPlant.js"; // Mona //

import Dashboard from "./components/dashboard";
import Registered from "./components/Registered";
import EditUser from "./components/EditUser";
import { PrivateRoute } from "./PrivateRoutes";
import AddPlant from "./components/AddPlant";
function App() {
  return (
    <div className="App">
      <Router>
        <Content>
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/editplant" component={EditPlant} />
          <Route exact path="/login" component={LoginForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/registered" component={Registered} />
          <PrivateRoute path="/edituser" component={EditUser} />
          <PrivateRoute path="/addplant" component={CreatePlantForm} />
        </Content>
      </Router>
    </div>
  );
}
const Content = styled.div`
  margin-top: 150px;
  @media (min-width: 700px) {
    margin-top: 100px;
  }
`;
export default App;
