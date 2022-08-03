import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';

import Header from './Header';
import Home from "./Home.js";
import Collections from "./Collections.js"
import Watches from "./Watches.js"

function getCompany() {
  fetch("http://localhost:9292/company")
  .then((r) => r.json())
  .then((data) => console.log(data));
}
function getWatches(){
  fetch("http://localhost:9292/watches")
  .then((r) => r.json())
  .then((data) => console.log(data));
}
function getCollections(){
  fetch("http://localhost:9292/collection")
  .then((r) => r.json())
  .then((data) => console.log(data));
}

//
function App() {
  const [companies, setCompanies] = useState([]);

  return (
    <div className="App">
      <button onClick={getCompany}>Company</button>
      <button onClick={getWatches}>Watches</button>
      <button onClick={getCollections}>Collection</button>

{/* Routes for fetch webpages attachments */}
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Home => Company page */}
        <Route exact path="/" element = {<Home/>}></Route>
        {/* Home => Company page */}

        {/* Collections page  */}
        <Route exact path="/Collections" element = {<Collections/>}></Route>

        <Route exact path="/Watches" element = {<Watches/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
