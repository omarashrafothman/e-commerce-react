import React from "react";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="py-4 top">
        <div className="container-xxl">
          <div className="row align-items-center footHead">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img src="images/newsletter.png" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7 footerInput">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-5">
                  cairo : egypt
                  <br /> PinCode : 123456
                </address>
                <a
                  href="tel:+20 1552242010"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +20 1552242010
                </a>
                <a
                  href="mailto:omarothman20002@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  omarothman20002@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    href="https://www.linkedin.com/in/omar-ashraf-othman-15b87a1a8/"
                    target="_blanck"
                  >
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/maro.ashraf/"
                    target="_blanck"
                  >
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a
                    href="https://github.com/omarashrafothman"
                    target="_blanck"
                  >
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a href="#" target="_blanck">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Refound Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Contact
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="" className="text-white py-2 mb-1">
                  Laptops
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Developer Omar
                Othman
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
