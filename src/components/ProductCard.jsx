import React from "react";
import "../App.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-3">
      <Link className="productCard position-relative">
        <div className="wishListIcon  position-absolute">
          <Link>
            <img src="images/wish.svg" />
          </Link>
        </div>
        <div className="productImage">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
          <img
            src="images/watch-1.jfif"
            className="img-fluid"
            alt="product image"
          />
        </div>
        <div className="productDetails">
          <h6 className="brand">Havels</h6>
          <h5 className="productTittle">
            Kids headphones bulk 10 pack multi colored for student
          </h5>
          <ReactStars count={5} size={24} value={3} isHalf a11y={true} />

          <p className="price">$100.00</p>
        </div>
        <div className="actionBar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" />
            </Link>
            <Link>
              <img src="images/view.svg" />
            </Link>

            <Link>
              <img src="images/add-cart.svg" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
