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
import CollectionPage from "./CollectionPage.js"
import WatchPage from "./WatchPage"



//
  function App() {

  const [companies, setCompanies] = useState([]);


  function getCompany() {
    fetch("http://localhost:9292/companies")
    .then((r) => r.json())
    .then((data) => console.log(data));
  }
    
    function getWatches(){
    fetch("http://localhost:9292/watches")
    .then((r) => r.json())
    .then((data) => console.log(data));
    }
  
    function getCollections(){
    fetch("http://localhost:9292/collections")
    .then((r) => r.json())
    .then((data) => console.log(data));
    }


    

// Show featured company
// Featured Company
// function handler(companyToFeature){
//  setter = true
//  thingBeingSet 
//}
//
//
// We're passing this^ through props down to the card
// In the button(on click) call handler with name of the company
//
//


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
        <Route exact path="/collections" element = {<CollectionPage/>}></Route>

        {/* <Route path="/companies/:id" element={</>}/> */}
        <Route exact path="/watches" element = {<WatchPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
