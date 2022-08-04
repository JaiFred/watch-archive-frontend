import {useState, useEffect} from "react";

import CollectionContainer from "./CollectionContainer.js"
import { useLocation } from "react-router-dom";



function CollectionPage(props){
    console.log(props.location.state)
    const [collections, setCollections] = useState([])

    // const { id, name, company_id } = getCompanyCollections;

    

    // const { id } = collection

    // const location = useLocation()
    // const {from} = location.state
    // console.log(from)


    // const {}

    useEffect(() => {
        fetch(`http://localhost:9292/collections`)
        .then((r) => r.json())
        .then((data) => setCollections(data));
    }, [])
    return(
        <div>
            <CollectionContainer collections={collections}/>
        </div>
    )
}
export default CollectionPage