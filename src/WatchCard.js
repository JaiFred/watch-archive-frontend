

function WatchCard({watch}) {

    const {id, image_url, name, manufacturer, materials, year, company_id, collection_id } = watch

//     create_table "watches", force: :cascade do |t|
//     t.string "image_url"
//     t.string "name"
//     t.string "manufacturer"
//     t.string "materials"
//     t.integer "year"
//     t.integer "company_id"
//     t.integer "collection_id"
//     end

    return (
    <div>
        <img src={image_url}></img>
    </div>
    )

}

export default WatchCard

