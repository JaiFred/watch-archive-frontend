import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react'
function CompanyCard({company}){
    const { id, name, country, founded, image_url } = company

    const handleClick = e => {
        console.log(e.target)

        console.log("image clicked")
    }

    return(
        <div className="companyCard">
            
            <button>
                <Link company={company} to="/Collections">
                    <div>
                        <img src={image_url} alt="brand logo" onClick={handleClick}></img>
                    </div>
                </Link>
            </button>
        </div>
    )
}
export default CompanyCard