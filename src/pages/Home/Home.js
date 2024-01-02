import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/userContext";
import Carousel from "../../components/Carousel/Carousel";
import FeatureProducts from "../../components/FeaturedProduct/FeatureProducts";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const [auth] = useAuth();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/product/all-products"
      );
      if (data.success) {
        setProducts(data.products);
        // console.log(data);
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
    <div>
      <Carousel />
     
      <h1 className="text-6xl text-center font-extrabold text-[#33475b]">Our Featured Products</h1>
      {products &&
        products.map((product) =>
          product.featured === "true" ? (
            <FeatureProducts
              key={product._id}
              id={product._id}
              name={product.name}
              description={product.description}
              images={product.images}
              rating={product.rating}
              category={product.category.name}
              quantity={product.stock}
              price={product.price}
            />
          ) : null
        )}
        <Carousel />
    </div>
  );
};

export default Home;
