import { useState, useEffect } from "react"
import WatchContainer from "./WatchContainer";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
  
 
function WatchPage(){
    const navigate = useNavigate();
    const [watches, setWatches] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/watches`)

        .then((r) => r.json()) 
        .then((data) => setWatches(data));
        
    }, [])

    return(
        <div>
             <button onClick={() => navigate(-1)}>Go back 1 Page</button>
            <WatchContainer watches={watches}/>
        </div>
    )

}

export default WatchPage