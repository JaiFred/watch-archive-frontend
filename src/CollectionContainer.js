import { useState ,useEffect} from 'react';

import CollectionCard from './CollectionCard.js';

function CollectionContainer({collections}) {
    const collectionCardList = collections.map((collection)=>(
        <CollectionCard key={collection.id} collection={collection}/>
    ))

    return( 
    <div>
        <h1>Collection</h1>
            {collectionCardList}
    </div>
    )
}

export default CollectionContainer