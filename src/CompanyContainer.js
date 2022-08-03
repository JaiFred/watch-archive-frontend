import CompanyCard from "./CompanyCard"

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