function CompanyCard({company}){
    const { id, name, country, founded, image_url } = company

    const handleClick = e => {
        console.log(e.target)

        console.log("image clicked")
    }

    return(
        <div className="companyCard">
            {name}
            <img src={image_url} alt="brand logo" onClick={handleClick}></img>
        </div>
    )
}
export default CompanyCard