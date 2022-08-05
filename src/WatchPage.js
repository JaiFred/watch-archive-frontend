import { useState, useEffect } from "react"
import WatchContainer from "./WatchContainer";

function WatchPage(){

    const [watches, setWatches] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/watches`)

        .then((r) => r.json()) 
        .then((data) => setWatches(data));
        
    }, [])

    return(
        <div>
            <WatchContainer watches={watches}/>
        </div>
    )

}

export default WatchPage