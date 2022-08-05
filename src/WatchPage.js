import { useState, useEffect } from "react"
import WatchContainer from "./WatchContainer";

function WatchPage(){

    const [watches, setWatches] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/watches`)

        .then((r) => r.json()) 
        .then((data) => setWatches(data));
        
    }, [])

    function handleDeleteWatch(deletedID) {
        // console.log(deletedID)
        const updatedWatchesArray = watches.filter(
          (watch) => watch.id !== deletedID
          
        );
        setWatches(updatedWatchesArray);
    }

    return(
        <div>
            <WatchContainer watches={watches} handleDeleteWatch={handleDeleteWatch}/>
        </div>
    )

}

export default WatchPage