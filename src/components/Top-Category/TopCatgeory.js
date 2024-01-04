import React from "react";
import "./topCategory.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const TopCatgeory = () => {
  return (
    <>
      <div className="top__category">
        <div className="top__model">
          <div className="left__model">
            <Carousel
              className="courasel"
              autoPlay={true}
              interval={1000}
              infiniteLoop={true}
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
            >
              <img
                src="https://rukminim2.flixcart.com/image/832/832/kigbjbk0-0/headphone/v/g/z/mgyj3hn-a-apple-original-imafy8whg2wxcygt.jpeg?q=70"
                alt=""
                className="carousel__images"
              />
              <img
                src="https://rukminim2.flixcart.com/image/832/832/kf0087k0/sari/d/v/b/free-n4574pb-saarah-unstitched-original-imafvk6wuwbuf7g8.jpeg?q=70"
                alt=""
                className="carousel__images"
              />
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/allinone-desktop/0/o/s/aic-i52400-8-500-128-19-11inch-window-11-dzab-original-imagwgwrwzgqffzq.jpeg?q=70"
                alt=""
                className="carousel__images"
              />
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/television/h/0/x/-original-imaghgphu8kjtgvs.jpeg?q=70"
                alt=""
                className="carousel__images"
              />
            </Carousel>
          </div>
          <div className="right__model">
            <div className="box__model">
              <div className="box__sub__model1">
                <p className="box__name">Screens</p>
                <p className="box__price">Rs 6,999</p>
                <p className="box__offer">Get upto 50% off</p>
              </div>
              <div className="box__sub__model2">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
            <div className="box__model">
              <div className="box__sub__model1">
                <p className="box__name">T-shirts</p>
                <p className="box__price">Rs 699</p>
                <p className="box__offer">Get upto 20% off</p>
              </div>
              <div className="box__sub__model2">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/t/w/o/xl-1-no-tsm-l-nyter-original-imagw73653ehbzgg.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
            <div className="box__model">
              <div className="box__sub__model1">
                <p className="box__name">Mobiles</p>
                <p className="box__price">Rs 4,999</p>
                <p className="box__offer">Get upto 70% off</p>
              </div>
              <div className="box__sub__model2">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
            <div className="box__model">
              <div className="box__sub__model1">
                <p className="box__name">Watches</p>
                <p className="box__price">Rs 4999</p>
                <p className="box__offer">Get upto 10% off</p>
              </div>
              <div className="box__sub__model2">
                <img
                  src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/d/h/f/gold625-626-gold-bracelet-gold-dd-casado-men-original-imagzbzdrdx8wk4t.jpeg?q=70"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCatgeory;
