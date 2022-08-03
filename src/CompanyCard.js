function CompanyCard({company}){
    const {id,name,country,founded,image_url} = company

    return(
        <div className="companyCard">
            {name}
            <img src={image_url}></img>
        </div>
    )
}
export default CompanyCard