
import React from "react"

import { useState } from "react"
import { Modal } from "react"

function EditModal(){

    const [ modalIsOpen, setModelIsOpen ] = useState (false)

    
    return(
        <div className="modal">
            
            <button id="my_btn" onClick={() => setModelIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen}/>
            <div className="modal_content">
                <p>Some text in the Modal..</p>
            </div>
            
        </div>
        
    )

}

export default EditModal