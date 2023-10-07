import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BgVideo from "./components/BgVideo";
import Overview from './components/Overview'
import Model from './components/Model'
function App() {
  return(
    <div className="App">
      <BgVideo />
      <Overview/>
      <Model/>
    </div>
  );
}

export default App;