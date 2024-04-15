import React from "react";
import Breadcrump from "../components/Breadcrump";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta";
function Ourstore() {
  return (
    <div>
      <Meta title={"our store"} />
      <Breadcrump title={"our store"} />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>  
                    <li>Camera</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By </h3>
                <h5 className="sub-title">Availabilty</h5>
                <div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                      />
                      In Stock(1)
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                      />
                      Out Of Stock(0)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstore;
