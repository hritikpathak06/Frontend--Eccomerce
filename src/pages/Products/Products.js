import React from "react";
import CategoryFilters from "../../components/CategoryFilter/CategoryFilter";
import MetaData from "../../Metadata/MetaData";




const Products = () => {
  return (
    <div>
      <MetaData title={"All Products || Shop Easy-No 1 Shopping Site"} />
      <h1>All Products</h1>
      <CategoryFilters />
    </div>
  );
};

export default Products;
