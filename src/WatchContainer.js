import WatchCard from "./WatchCard.js"

function WatchContainer({ watches, handleDeleteWatch }){
    const watchCardList = watches.map((watch)=>(
        <WatchCard key={watch.id} watch={watch} handleDeleteWatch={handleDeleteWatch}/>
    ))

    return (
        <div className="WatchContainer">
            {watchCardList}
        </div>
    )
}

export default WatchContainer;