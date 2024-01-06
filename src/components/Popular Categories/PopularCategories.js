import React from "react";
import "./popularCategories.css";
import { NavLink } from "react-router-dom";
import { useCategory } from "../../hooks/useCategory";

const PopularCategories = () => {
  const categories = useCategory();
  console.log(categories);
  return (
    <>
      <div className="popular__categories">
        <h1 className="text-6xl font-extrabold text-center text-[#33475b] mb-[3rem]">
          Popular Categories
        </h1>
        <div className="popular__category__box">
          {topCategories &&
            topCategories.map((category, index) => (
              <>
                <NavLink to={`/category/${category.slug}`}>
                  <div className="popular__sub__category__box">
                    <h3 className="mr-3">{category.name}</h3>
                    <img
                      src={category.url}
                      alt=""
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </NavLink>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default PopularCategories;

const topCategories = [
  {
    id: "65880be24417397cc42f0eb8",
    name: "SmartPhone",
    slug: "smartphone",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70",
  },
  {
    id: "65880c234417397cc42f0ec7",
    name: "Accessories",
    slug: "accessories",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/l/s/o/-original-imagwmkbrfqvthrt.jpeg?q=70",
  },
  {
    id: "65926cc75415b7fb6776fffe",
    name: "Grocery",
    slug: "grocery",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/nut-dry-fruit/6/m/m/200-afghan-premium-200g-seedless-black-1-pouch-grocery-farm-original-imagj5c4rwdkcdb6.jpeg?q=70",
  },
  {
    id: "65946da32f5ced5764c08b1d",
    name: "Sports",
    slug: "sports",
    url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cycle/9/o/6/fleetibc26tgrey-mountain-bike-with-cycling-event-ride-tracking-original-imagujwdaawwvpcw.jpeg?q=70",
  },
];
