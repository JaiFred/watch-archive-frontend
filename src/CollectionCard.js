import { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";

function CollectionCard({collection}) {
    const { id, name, company_id} = collection

    // console.log(company_id)

    // const newCollection = [...company_id]

    // const filteredCollections = newCollection.filter((company_id) => {
    //     return company_id !== 2
    // })

    return(
    <div>
        <div className="collectionCard">
            <h1>{name}</h1>
            <button>
                <Link collection={collection} to="/watches">Go to watches</Link>
            </button>
        </div>
    </div>

    )
}

export default CollectionCard