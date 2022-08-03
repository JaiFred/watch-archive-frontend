import {useState, useEffect} from "react";
import CompanyCard from "./CompanyCard.js"
import CompanyContainer from "./CompanyContainer.js"
// Company Container
function Home(){
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/company")
        .then((r) => r.json())
        .then((data) => setCompanies(data));
    }, [])
    
   
    return( 
       <div>
        <h1>Companies</h1>
       <CompanyContainer companies={companies}/>
       
       </div> 
    
    )
}

export default Home