import { useState, useEffect } from "react"
import WatchContainer from "./WatchContainer";
import { useNavigate } from 'react-router-dom';
function WatchPage(){
    const navigate = useNavigate();
    const [watches, setWatches] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/watches`)

        .then((r) => r.json()) 
        .then((data) => setWatches(data));
        
    }, [])

    // Handle delete watch is a function defined on the highest level of the Watch hierarchy "WatchPage" so that it can be passed down as a prop to WatchCard and used to delete Watches from WatchCard State
    function handleDeleteWatch(deletedID) {
        // console.log(deletedID)
        const updatedWatchesArray = watches.filter(
          (watch) => watch.id !== deletedID
          
        );
        setWatches(updatedWatchesArray);
    }

    // const handleEditFood = (editedCard) => {
    //     const updatedFoodsArray = foods.map((oldFoodCard) => {
    //       if (oldFoodCard.id === editedCard.id){
    //         return editedCard;
    //       } else {
    //         return oldFoodCard;
    //       }
    //     })
    //     setFoods(updatedFoodsArray);
    //   }

    return(
        <div>
             <button onClick={() => navigate(-1)}>Go back a page</button>
            <WatchContainer watches={watches} handleDeleteWatch={handleDeleteWatch}/>
        </div>
    )

}

export default WatchPage