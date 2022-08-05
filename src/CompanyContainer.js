import { useState ,useEffect} from 'react';
import CompanyCard from "./CompanyCard.js"

function CompanyContainer({companies, collections}){
   
    const companyCardList = companies.map((company)=>(
        <CompanyCard key={company.id} company={company} collections={collections}/>
    ))
    // const companyCollectionsProp = 

    // console.log(collections.company_id)
    // console.log(companies)


    return(
        <div className="CompanyContainer">
            {companyCardList}
        </div>
    )
}
export default CompanyContainer