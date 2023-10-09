import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import BgVideo from "./components/BgVideo";
import Overview from './components/Overview'
import Model from './components/Model'
import Frame from './components/Frame';
import Layout from './components/Layout';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<BgVideo />} />
    <Route path="overview" element={<Overview />} />
    <Route path="model" element={<Model />} />
    <Route path="game" element={<Frame />} />
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  );
}

export default App;