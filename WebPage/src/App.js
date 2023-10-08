import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BgVideo from "./components/BgVideo";
import Overview from './components/Overview'
import Model from './components/Model'
import Frame from './components/Frame';
function App() {
  return(
    <div className="App">
      <BgVideo />
      <Overview/>
      <Model/>
      <Frame/>
    </div>
  );
}

export default App;