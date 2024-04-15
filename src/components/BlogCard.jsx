import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ image, date, title, content }) {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={image} alt="blog" className="img-fluid" />
        </div>
        <div className="blog-content">
          <p className="date">{date}</p>
          <h5 className="title">{title}</h5>
          <p className="desc">{content}</p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
