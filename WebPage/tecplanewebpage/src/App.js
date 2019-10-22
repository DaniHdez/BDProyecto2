import React from 'react';
import './App.css';
import Dashboard from "./components/dashboard.js";
import Routes from "./components/routes/routesAdmin.js";


function App() {
  return (
    <div className="App">
      <Dashboard routes = {Routes}/>
    </div>
  );
}

export default App;
