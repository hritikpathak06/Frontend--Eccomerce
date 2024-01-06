import React, { useState, useEffect } from "react";
import "./logoSlider.css";

const LogoSlider = () => {
  return (
    <>
      <div className="logo__slider">
        <div className="text__wrapper">
          <h1 className="text-6xl font-extrabold text-center text-[#33475b]">
            Our Brand Partners
          </h1>
          <h3 className="text-xl font-extrabold text-center text-[#33475b]">
            Our Customer Has Gotten Best Offers From the Awesome Companies
          </h3>
          <div className="marquee">
            <div className="marquee__group">
              {row1 &&
                row1.map((row, index) => (
                  <>
                    <div className="image__group">
                      <img src={row} alt="" />
                    </div>
                  </>
                ))}
            </div>
            <div className="marquee__group">
              {row1 &&
                row1.map((row, index) => (
                  <>
                    <div className="image__group">
                      <img src={row} alt="" />
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className="marquee">
            <div className=" marquee__group2">
              {row2 &&
                row2.map((row, index) => (
                  <>
                    <div className="image__group">
                      <img src={row} alt="" />
                    </div>
                  </>
                ))}
            </div>
            <div className=" marquee__group2">
              {row2 &&
                row2.map((row, index) => (
                  <>
                    <div className="image__group">
                      <img src={row} alt="" />
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

export default LogoSlider;

// const logos = [
//     "https://shoply-app.netlify.app/brand-06.png",
//     "https://shoply-app.netlify.app/brand-03.png",
//     "https://shoply-app.netlify.app/brand-01.png",
//     "https://shoply-app.netlify.app/brand-05.png",
//     "https://shoply-app.netlify.app/brand-08.png",
//     "https://shoply-app.netlify.app/brand-07.png"

// ]

const row1 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
];

const row2 = [
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
];
