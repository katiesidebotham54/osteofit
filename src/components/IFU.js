import React from "react";
import "../styling/mainStyle.scss";
import IFUdoc from '../documents/Osteofit_IFU.pdf';

const IFU = () => {
    return(
<section class="mt-3 bg-light-secondary">
<div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h4 class=" mt-4">Osteofit, LLC. Instructions for Use</h4>
                </div>
            </div>
    <div class= "mb-5">
     <embed type = "application/pdf" width="100%" height="1000px" src={IFUdoc}/>
</div>
</section>
    )
}

export default IFU;