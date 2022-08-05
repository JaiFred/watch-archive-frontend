import {useState, useEffect} from "react";
import CompanyContainer from "./CompanyContainer.js"
// Company Container

function Home(){
    const [companies, setCompanies] = useState([])
    const [collections, setCollections] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/companies")
        .then((r) => r.json())
        .then((data) => setCompanies(data));

    }, [])

    useEffect(() => {
        fetch("http://localhost:9292/collections")
        .then((r) => r.json())
        .then((data) => setCollections(data));
    }, [])

    

    return( 
       <div>
        <h1>Companies</h1>
       <CompanyContainer companies={companies} collections={collections}/>
       
       </div> 
    
    )
}

export default Home
