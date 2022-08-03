import {useState, useEffect} from "react";
import CollectionCard from "./CollectionCard.js"
import CollectionContainer from "./CollectionContainer.js"
function Collection(){
    const [collections, setCollections] = useState([])
    useEffect(() => {
        fetch("http://localhost:9292/collection")
        .then((r) => r.json())
        .then((data) => setCollections(data));
    }, [])
    return(
        <div>
            <CollectionContainer collections={collections}/>
        </div>
    )
}
export default Collection