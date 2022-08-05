import {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

import CollectionContainer from "./CollectionContainer.js"

function CollectionPage(){
    const [collections, setCollections] = useState([])

    // const { id, name, company_id } = collections

    // console.log(name)
    
    // const { id, name, country, founded, image_url } = company


    // const location = useLocation()

    // const id = location.state?.id

    // console.log(id)



    useEffect(() => {
        fetch(`http://localhost:9292/collections`)

        .then((r) => r.json()) 
        .then((data) => setCollections(data));
        
    }, [])


    return(
        <div>
            <button onClick={() => navigate(-1)}>Go back 1 Page</button>
            <CollectionContainer collections={collections}/>
        </div>
    )
}
export default CollectionPage