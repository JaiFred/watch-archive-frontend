
import { useState } from 'react'

function SubmitWatch({ handleAddWatch }){

//     create_table "watches", force: :cascade do |t|
//     t.string "image_url"
//     t.string "name"
//     t.string "manufacturer"
//     t.string "materials"
//     t.integer "year"
//     t.integer "company_id"
//     t.integer "collection_id"
//     end

    const [ image_url, setImage ] = useState ("")
    const [ name, setName ] = useState("")
    const [ manufacturer, setManufacturer ] = useState("")
    const [ materials, setMaterials ] = useState("")
    const [ year, setYear ] = useState("")
    const [ company_id, setCompany ] = useState("")
    const [ collection_id, setCollection ] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/watches", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            image_url: image_url,
            name: name,
            manufacturer: manufacturer,
            materials: materials,
            year: year,
            company_id: company_id,
            collection_id: collection_id
          })
        })
        .then((res) => res.json())
        .then((newWatch) => handleAddWatch(newWatch)); 
    }

    console.log("hi")

    return (
        <form onSubmit={handleSubmit} method="post">
            <ul>
                <div>
                    <label>
                        <input type="text" 
                            className="textInput" 
                            id="image" 
                            placeholder='image' 
                            onChange={(e) => setImage(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            className="textInput"
                            id="name"
                            placeholder='name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>

                <input id="submitBtn" type="submit"/>
            </ul>
        </form>
    )


}

export default SubmitWatch