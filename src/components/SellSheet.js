import React from "react";
import "../styling/mainStyle.scss";
import SellSheetPDF from '../documents/OsteoFit_SellSheet.pdf';

const SellSheet = () => {
    return(
<section class="mt-3 bg-light-secondary">
<div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h4 class=" mt-4">Product Profile Sheet</h4>
                </div>
    </div>
<div class= "mb-5">
     <embed type = "application/pdf" width="100%" height="1200px" src={SellSheetPDF}/>
</div>

</section>
    )
}

export default SellSheet;