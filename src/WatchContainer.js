import WatchCard from "react"

function WatchContainer(){
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