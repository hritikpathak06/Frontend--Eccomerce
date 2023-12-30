import React from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import CreateProductForm from "../../components/CreateProduct/CreateProduct";

const CreateProduct = () => {
  return (
    <>
      <div className="container-fluid m-3 p-3 mt-9">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 min-h-[80vh] mt-10">
            <h1 className="text-6xl mb-3 ml-2 font-extrabold text-[#33475b]">
              Create Product
            </h1>
            <CreateProductForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
