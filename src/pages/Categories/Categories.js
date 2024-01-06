import React from "react";
import { useCategory } from "../../hooks/useCategory";
import { NavLink } from "react-router-dom";
import "./allCategories.css";
import MetaData from "../../Metadata/MetaData";

const Categories = () => {
  const categories = useCategory();

  return (
    <>
    <MetaData title={"All Categories || Shop Easy-No 1 Shopping Site"} />
      <h1 className="text-6xl font-extrabold text-center text-[#33475b] mt-[6rem] w-auto">
        All Categories
      </h1>
      <div className="all__categories">
        <div className="left__categories">
          {categories &&
            categories.map((category, index) => (
              <>
                <NavLink to={`/category/${category.slug}`}>
                  <div className="category__box">
                    <p>{category.name}</p>
                  </div>
                </NavLink>
              </>
            ))}
        </div>
        <div className="right__categories">
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/13/55/page-template-of-choose-a-category-vector-21681355.jpg"
            alt=""
          />
        </div>
      </div>
      {/* <div style={{ marginTop: "5rem" }}>
        <h1 className="text-6xl font-extrabold text-[#33475b]">
          All Categories
          <div className="container">
            <div className="row">
              <div className="col-md-6  w-[50%]">
                {categories.map((c) => (
                  <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                    <div className="card">
                      <NavLink
                        to={`/category/${c.slug}`}
                        className="btn cat-btn"
                      >
                        {c.name}
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <img
                  src="https://cdn1.vectorstock.com/i/1000x1000/13/55/page-template-of-choose-a-category-vector-21681355.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </h1>
      </div> */}
    </>
  );
};

export default Categories;
