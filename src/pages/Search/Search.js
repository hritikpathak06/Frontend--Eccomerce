import React from "react";
import { useSearch } from "../../context/searchContext";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Search = () => {
  const [values] = useSearch();
  return (
    <>
      <div className="container mt-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-[#33475b]">
            Seach Results
          </h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values.results.length}`}
          </h6>
          <div className="flex  m-auto flex-wrap min-h-fit search__product w-[80%]">
            {values.results &&
              values.results.map((product) => (
                <>
                  <div className="all__product__prodcuts">
                    <NavLink
                      to={`/product/${product._id}`}
                      className={"main_div"}
                    >
                      <img
                        src={product.images[2].url}
                        alt=""
                        style={{
                          width: "200px",
                          height: "300px",
                          margin: "auto",
                          objectFit: "contain",
                        }}
                        className="all__product__image"
                      />
                      <p className="all__product__name">
                        {product.name.substring(0, 20)}....
                      </p>
                      <div className="react__star">
                        <ReactStars
                          edit="false"
                          color="tomato"
                          value={product.rating}
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
                    </NavLink>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
