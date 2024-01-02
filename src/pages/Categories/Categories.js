import React from "react";
import { useCategory } from "../../hooks/useCategory";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();

  return (
    <>
      <div style={{ marginTop: "5rem" }}>
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
      </div>
    </>
  );
};

export default Categories;
