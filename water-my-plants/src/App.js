import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';
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
    </div>
  );
}

export default App;
