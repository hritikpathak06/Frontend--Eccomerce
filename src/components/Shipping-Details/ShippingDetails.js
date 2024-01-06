import React from "react";
import "./shippingDetails.css"

const ShippingDetails = () => {
  return (
    <>
      <div className="shipping__details">
        <div className="shipping__details__box">
          <div className="info__box">
            <img src="https://shoply-app.netlify.app/service.png" alt="" />
            <div className="details__box">
              <p>Free Shipping</p>
              <pre>From all orders over Rs 499</pre>
            </div>
          </div>
          <div className="info__box">
            <img src="https://shoply-app.netlify.app/service-02.png" alt="" />
            <div className="details__box">
              <p>Daily Surprise Offers</p>
              <pre>Save upto 25% off</pre>
            </div>
          </div>
          <div className="info__box">
            <img src="https://shoply-app.netlify.app/service-03.png" alt="" />
            <div className="details__box">
              <p>Support 24/7</p>
              <pre>Within Expert</pre>
            </div>
          </div>
          <div className="info__box">
            <img src="https://shoply-app.netlify.app/service-04.png" alt="" />
            <div className="details__box">
              <p>Affordable Prices</p>
              <pre>Get Factory Default Price</pre>
            </div>
          </div>
          <div className="info__box">
            <img src="https://shoply-app.netlify.app/service-05.png" alt="" />
            <div className="details__box">
              <p>Secure Payments</p>
              <pre>100% Protection</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingDetails;
