import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/searchContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://backendd-delta.vercel.app/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate(`/search`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          placeholder="Search Proucts Here"
          className="w-[500px] p-2 outline-none  input__search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <input
          type="submit"
          value={"Search"}
          className="btn btn-primary  bg-orange-600 input__btn"
        />
      </form>
    </div>
  );
};

export default SearchBar;
