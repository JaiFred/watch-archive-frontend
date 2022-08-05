function WatchCard({ watch, handleDeleteWatch }) {

    const {id, image_url, name, manufacturer, materials, year, company_id, collection_id } = watch

    function handleDeleteClick() {
        const reqObj = {
            method: "DELETE"
        }
        fetch(`http://localhost:9292/watches/${id}`, reqObj )
        .then((res) => res.json())
        .then(handleDeleteWatch(id))
    }

//     create_table "watches", force: :cascade do |t|
//     t.string "image_url"
//     t.string "name"
//     t.string "manufacturer"
//     t.string "materials"
//     t.integer "year"
//     t.integer "company_id"
//     t.integer "collection_id"
//     end

    return(
    <div>
        <img src={image_url}></img>
        <button className="delete_button" onClick={handleDeleteClick}>Delete Post</button>
    </div>
    )

}

export default WatchCard


