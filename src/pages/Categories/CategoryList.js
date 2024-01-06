import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const CategoryList = () => {
  const [products, setProducts] = useState([]);

  const { slug } = useParams();

  const getProductByCategory = async (req, res) => {
    try {
      const { data } = await axios.get(
        `https://backendd-delta.vercel.app/api/v1/product/product-category/${slug}`
      );
      if (data?.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    if (slug) {
      getProductByCategory();
    }
  }, [slug]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    // activeColor: "tomato",
    value: 3,
    isHalf: true,
  };

  console.log(products);
  return (
    <>
      {/* <h1>Category List</h1>
      {products &&
        products.map((product, index) => (
          <>
            <div className="" style={{ marginTop: "5rem" }}>
              <div className="all__product__prodcuts">
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
                </NavLink>
              </div>
            </div>
          </>
        ))} */}

        <div className="container mt-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-[#33475b]">Your Products</h1>
          <div className="flex  m-auto flex-wrap min-h-fit search__product w-[80%]">
            {products &&
              products.map((product) => (
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

export default CategoryList;
