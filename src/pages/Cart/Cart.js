import React, { useState, useEffect } from "react";

import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import "./Cart.css";
import NoProductCart from "./NoProductCart";
import Faq from "../../components/FAQ/FAQ";
import MetaData from "../../Metadata/MetaData";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("INR", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "https://backendd-delta.vercel.app/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <MetaData title={"Your Cart || Shop Easy-No 1 Shopping Site"} />
      <div className="cart mt-10 ">
        <h1 className="text-center text-6xl text-[#33475b] font-extrabold  mt-10 ">
          Your Cart Items: {cart?.length}
        </h1>
        {cart.length === 0 ? (
          <NoProductCart />
        ) : (
          <div className="cart__page">
            <div className="left__cart">
              {cart?.map((c, index) => (
                <>
                  <>
                    <div className="left__cart__details">
                      <div className="cart__details__first">
                        <img
                          src={c.images[0].url}
                          alt=""
                          className="cart__page__image"
                        />
                      </div>
                      <div className="cart__details__second w-[500px]">
                        <h2 className="text-xl font-bold text-[#33475b]">
                          {c.name}
                        </h2>
                        <ReactStars
                          count={5}
                          size={30}
                          edit={false}
                          value={c.rating}
                        />
                        <h1 className="text-xl font-extrabold text-[#FF6347]">
                          {c.price.toLocaleString("INR", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </h1>
                        <button
                          className="btn btn-danger mt-3 mb-3"
                          onClick={() => removeCartItem(c._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </>
                </>
              ))}
            </div>
            <div className="right__cart">
              <div className="cart__summary ]">
                <h1 className="text-5xl font-extrabold text-center mt-1 text-[#33475b]">
                  Summary{" "}
                </h1>
                <h5 className="text-2xl  text-center text-stone-500 mt-1">
                  Total || Checkout
                </h5>
                <h4 className="text-2xl  text-center font-extrabold text-[#FF6347] mt-1">
                  Total : {totalPrice()}{" "}
                </h4>
                {auth?.user?.address ? (
                  <>
                    <div className="mb-3">
                      <h4 className="text-center">Current Address</h4>
                      <h5 className="text-center">{auth?.user?.address}</h5>
                      {/* <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Update Address
                    </button> */}
                    </div>
                  </>
                ) : (
                  <div className="mb-3 ml-3">
                    {auth?.token ? (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/user/profile")}
                      >
                        Update Address
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning text-center m-auto ml-15"
                        onClick={() =>
                          navigate("/login", {
                            state: "/cart",
                          })
                        }
                      >
                        Plase Login to checkout
                      </button>
                    )}
                  </div>
                )}
                <div className="mt-2 mb-10">
                  {!clientToken || !auth?.token || !cart?.length ? (
                    ""
                  ) : (
                    <>
                      <DropIn
                        options={{
                          authorization: clientToken,
                          paypal: {
                            flow: "vault",
                          },
                        }}
                        onInstance={(instance) => setInstance(instance)}
                      />

                      <button
                        className="btn btn-primary text-center m-auto w-full"
                        onClick={handlePayment}
                        disabled={loading || !instance || !auth?.user?.address}
                      >
                        {loading ? "Processing ...." : "Make Payment"}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Faq />
    </>
  );
};

export default CartPage;
