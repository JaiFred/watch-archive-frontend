import {useState, useEffect} from "react";

import CollectionContainer from "./CollectionContainer.js"


function CollectionPage(){
    const [collections, setCollections] = useState([])
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