import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
// import { PlusIcon } from "@heroicons/react/outline";
import { CgAdd, CgPlayButton } from "react-icons/cg";
import "./AllProducts.css";

const AllProducts = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    value: product.rating,
    isHalf: true,
  };
  return (
    <>
      <div
        className="all__product__prodcuts"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLink to={`/product/${product._id}`} className={"main_div"}>
          <img
            src={product.images[2].url}
            alt=""
            className="all__product__image"
            style={{ objectFit: "contain", margin: "auto" }}
          />
          <p className="all__product__name">
            {product.name.substring(0, 20)}....
          </p>
          <div className="react__star">
            <ReactStars
              {...options}
              size={25}
              classNames="react__stars__component"
            />
          </div>
          <span className="all__product__price">
            {product.price.toLocaleString("INR", {
              style: "currency",
              currency: "INR",
            })}
          </span>
          {isHovered && (
            <div className="plus-icon">
              <CgAdd className="plus-icon-svg" />
              <div className="tooltip">Add to Cart</div>
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};

export default AllProducts;
