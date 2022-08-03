import { useState ,useEffect} from 'react';
import CompanyCard from "./CompanyCard.js"

function CompanyContainer({companies}){
    const companyCardList = companies.map((company)=>(
        <CompanyCard key={company.id} company={company}/>
    ))
    return(
        <div className="CompanyContainer">
            {companyCardList}
            
        </div>
    )
}
export default CompanyContainer