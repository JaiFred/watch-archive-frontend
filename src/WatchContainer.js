import WatchCard from "./WatchCard.js"

function WatchContainer({watches}){
    const watchCardList = watches.map((watch)=>(
        <WatchCard key={watch.id} watch={watch}/>
    ))

    return (
        <div className="WatchContainer">
            {watchCardList}
        </div>
    )
}

export default WatchContainer;
