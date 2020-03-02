import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Signup from "./components/SignUp";
import Login from "./components/Login";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="NavBar">
        <Navigation />
        
      </header>

    {/* Switch and routes here as well as Protected Routes with Token Authentication */}
      {/* <Switch>
        <ProtectedRoute path='/protected' component={PlantPage} />
        <ProtectedRoute path='/protected' component={Plants} />
        <ProtectedRoute path='/protected' component={PlantPage} />
      </Switch> */}
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
