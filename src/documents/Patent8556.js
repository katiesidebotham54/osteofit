import React from 'react'
import Patent9101368 from '../documents/9101368.pdf';


const Patent9101 = () => {
    return(
        <div>
            <embed type = "application/pdf" width="100%" height="500px" src={Patent9101368}/>
        </div>
    )
}

export default Patent9101;