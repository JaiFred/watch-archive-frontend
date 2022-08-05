import { useState, useEffect } from "react"

import WatchContainer from "react"

function WatchPage(){

    const [ watches, setWatches ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/watches`)

        .then((r) => r.json()) 
        .then((data) => setWatches(data));
        
    }, [])


    // const { collection } = collection

    return (
        <div>
            <WatchContainer/>
        </div>
    )
}

export default WatchPage;