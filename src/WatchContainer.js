import WatchCard from "react"

function WatchContainer(watches){
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
