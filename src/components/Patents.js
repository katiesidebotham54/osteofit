import React from 'react';
import "../styling/table.scss";
import "../styling/mainStyle.scss"
import {
  Link,
} from 'react-router-dom'


const Patents = () => {
    return(
    <section class="table-section">
    <div class="container">
    <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-6">
                    <h4 class=" mt-4">OsteoFit Patents Associated with Single-Use Acetabular Reamers</h4>
                </div>
    </div>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">No.</div>
      <div class="col col-2-table">Title</div>
      <div class="col col-3">Patent/App. No.</div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="No.">1</div>
      <div class="col col-2-table" data-label="Title">Methods of Forming Medical Reamers</div>
      <div class="col col-4" data-label="patentNo.">
      <Link class="nav-link patent-link" exact to ="/patent9101368">
        9,101,368
      </Link>
      </div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="No.">2</div>
      <div class="col col-2-table" data-label="Title">Modular Spherical Hollow Reamer Assembly for Medical Applications</div>
      <div class="col col-4" data-label="patentNo.">
      <Link class="nav-link patent-link" exact to ="/patent8556897">
      8,556,897
      </Link> 
    </div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="No.">3</div>
      <div class="col col-2-table" data-label="Title">Modular Spherical Hollow Reamer Assembly for Medical Applications</div>
      <div class="col col-4" data-label="patentNo.">
      <Link class="nav-link patent-link" exact to ="/patent8518043">
        8,518,043
        </Link>
        </div>
    </li>
    <li class="table-row">
      <div class="col col-1" data-label="No.">4</div>
      <div class="col col-2-table" data-label="Title">Disposable Reamer Shaft for Modular Spherical or Tapered Hollow Reamer Assembly for Medical Applications</div>
      <div class="col col-4" data-label="patentNo.">
      <Link class="nav-link patent-link" exact to ="/patent9463028">
        9,463,028
        </Link>
        </div>
    </li>
  </ul>
</div>
</section>
 )
}

export default Patents;