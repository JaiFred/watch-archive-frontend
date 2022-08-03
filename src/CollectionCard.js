import { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";

function CollectionCard({collection}) {
    const { id, name, company_id} = collection

    return(
<div>
<div className="collectionCard">
    
            <h1>{name}</h1>
            <button>
            <Link collection={collection} to="/watches">Go to Collection</Link>
            </button>
        </div>
</div>

    )
}
export default CollectionCard