import React, { useEffect, useState } from "react";
import MetaData from "../../Metadata/MetaData";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "../../context/cartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AllProducts from "../../components/All -Products/AllProducts";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  value: 2.5,
  isHalf: true,
};

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [singleImage, setSingleImage] = useState("");
  const [cart, setCart] = useCart();

  // Get Single Product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://backendd-delta.vercel.app/api/v1/product/single-product/${id}`
      );
      if (data.success) {
        setProduct(data.product);
        setSingleImage(data.product.images[0].url);
        getSimilarProducts(data?.product._id, data?.product.category._id);
      } else {
        toast.error("Cant Fetch the Product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const [url, setUrl] = useState(`${setSingleImage}`);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const itemToAdd = {
      ...product,
      quantity,
      total: product.price * quantity,
    };
    setCart([...cart, itemToAdd]);
    localStorage.setItem("cart", JSON.stringify([...cart, itemToAdd]));
    toast.success("Item Added To Cart");
  };

  // Get similar products
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `https://backendd-delta.vercel.app/api/v1/product/similar-products/${pid}/${cid}`
      );
      if (data?.success) {
        setRelatedProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    // getSimilarProducts();
  }, []);

  console.log("Related Products =>", relatedProducts);

  return (
    <>
      <MetaData title={"Product Description || Shop Easy-No 1 Shopping Site"} />
      <img src={url} alt="" />
      <div className="product__details">
        <div className="product__details__left">
          <Swiper
            spaceBetween={6}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="swiper__image"
          >
            {product.images &&
              product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt={`Product Image ${index + 1}`}
                    className="product__details__image"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="product__details__right mt-10">
          <h2 className="product__detail__name text-[#33475b]">
            {product.name}
          </h2>
          <div className="product__detail__react__star">
            <ReactStars
              size={40}
              {...options}
              classNames="react__stars__component"
            />
          </div>
          <p className="product__details__price">Rs{product.price}</p>
          <div className="product__details__quantity">
            <button
              className="product__details__btn"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="product__details__input"
            />
            <button
              className="product__details__btn"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <p className="prodcut__details__description">
            <span>Description:</span>
            {product.description}
          </p>
          <div className="product__details__main__btn">
            <button
              className="product__details__mainBtn add_TO_cart"
              onClick={addToCart}
            >
              Add To Cart
            </button>
            <button
              className="product__details__mainBtn add_TO_cart"
              style={{ color: "#fff", background: "tomato" }}
              onClick={() => {
                addToCart();
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100vw]">
        <h1 className="text-6xl text-center font-extrabold text-[#33475b]">
          Similar Products
        </h1>
        <div className="flex w-[60%] m-auto">

        {relatedProducts && relatedProducts.map((product,index) => (
          <AllProducts product={product} key={index}/>
        ))}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
