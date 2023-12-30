import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AllProductsAdmin.css";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const AllProductsAdmin = () => {
  const [products, setProducts] = useState([]);

  // Get All Products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/product/all-products"
      );
      if (data.success) {
        setProducts(data.products);
        console.log(data);
      } else {
        toast.error("cant Fetch the Products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9  mt-10">
            <h1 className="text-6xl font-extrabold text-center text-[#33475b] ml-2">
              All Products
            </h1>
            <div className="flex flex-wrap items-center ">
              {products &&
                products.map((product) => (
                  <>
                    <div className="card__product ">
                      <div className="card__image">
                        <img
                          src={product.images[0].url}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body w-[100%] mt-3">
                        <h5 className="card-title text-center card__title___heading text-[#33475b] pl-2 pr-2 text-xl">
                          {product.name.substring(0, 35)}...
                        </h5>
                        <div className=" card-text m-auto">
                          <ReactStars
                            count={5}
                            size={30}
                            edit={false}
                            value={product.rating}
                            classNames="m-auto"
                          />
                        </div>
                        <h4 className="text-center text-xl text-[tomato] font-bold">
                          ₹:{product.price}
                        </h4>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsAdmin;
