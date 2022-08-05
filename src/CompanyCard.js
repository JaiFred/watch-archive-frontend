import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react'
import CollectionPage from "./CollectionPage";

function CompanyCard({company, collections}){

    const { id, name, country, founded, image_url } = company
    // const { company_id } = collections
    // console.log(collections)
    // const { company_id } = collections

    const handleClick = e => {

        console.log(e.target)

        console.log(company)

        console.log("image clicked")

        // console.log(collections.company_id)
    }

// this filters shows company's collections

    return(
        <div className="companyCard">
            
            <button>
                <Link company={company} to={{pathname:"/collections",state: {id: id}}}>
                    <div>
                        <img src={image_url} alt="brand logo" onClick={handleClick}></img>
                    </div>
                </Link>
            </button>
        </div>
    )
}

export default CompanyCard