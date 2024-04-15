import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

// import ProductCard from "../components/ProductCard";
// import SpecialProduct from "../components/SpecialProduct";
// import Container from "../components/Container";
// import { services } from "../utils/Data";

function Home() {
  return (
    <div>
      <section className="home-wrapper-1 container-xxl">
        <div className="row bg-white py-4 ">
          <div className="col-6 ">
            <div className="main-banner position-relative px-2  ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap  justify-content-between">
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Music and Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Smart tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Music and Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Smart tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex gap align-align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Features Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famus.avif"
                  className="img-fluid"
                  alt="product image"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6> Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famus.avif"
                  className="img-fluid"
                  alt="product image"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6> Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famus.avif"
                  className="img-fluid"
                  alt="product image"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6> Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famus.avif"
                  className="img-fluid"
                  alt="product image"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6> Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Collections </h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="ms-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="ms-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard
              image="images/blog-1.jpg"
              title="A Beautiful Sunday Morning Renaissance"
              date="11 June, 2023"
              content="You are only as good as your last collections, which is an enomus pressure , i think there is sometim about..."
            />
            <BlogCard
              image="images/blog-1.jpg"
              title="Sad ut perspicties unde omnis..."
              date="15 Feb, 2023"
              content="You are only as good as your last collections, which is an enomus pressure , i think there is sometim about..."
            />
            <BlogCard
              image="images/blog-1.jpg"
              title="A Beautiful Sunday Morning Renaissance"
              date="11 June, 2023"
              content="You are only as good as your last collections, which is an enomus pressure , i think there is sometim about..."
            />
            <BlogCard
              image="images/blog-1.jpg"
              title="Sad ut perspicties unde omnis..."
              date="11 June, 2023"
              content="You are only as good as your last collections, which is an enomus pressure , i think there is sometim about..."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
