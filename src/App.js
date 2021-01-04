import './App.css';
import React from 'react';
import LoginForm from './components/LoginForm';
import CreatePlantForm from './components/CreatePlantForm';



function App() {


  return (
    <div className="App">
      <LoginForm />
      <CreatePlantForm />
    </div>
  );
}

export default App;
