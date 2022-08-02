import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';

import Home from "./Home.js";
import Collections from "./Collections.js"
import Watches from "./Watches.js"

function getCompany(){
  fetch("http://localhost:9292/company")
  .then((r) => r.json())
  .then((data) => console.log(data));
}
function getWatches(){
  fetch("http://localhost:9292/watches")
  .then((r) => r.json())
  .then((data) => console.log(data));
}
function getCollection(){
  fetch("http://localhost:9292/collection")
  .then((r) => r.json())
  .then((data) => console.log(data));
}
function App() {
  return (
    <div className="App">
      <button onClick={getCompany}>Company</button>
      <button onClick={getWatches}>Watches</button>
      <button onClick={getCollection}>Collection</button>
    
    <Routes>
      <Route path="Home"></Route>
      <Route path="Collections"></Route>
      <Route path="Watches"></Route>
    </Routes>
</div>
   
  );
}

export default App;
