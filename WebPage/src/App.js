import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BgVideo from "./components/BgVideo";
import Overview from './components/Overview'

function App() {
  return(
    <div className="App">
      <BgVideo />
      <Overview/>

    </div>
  );
}

export default App;