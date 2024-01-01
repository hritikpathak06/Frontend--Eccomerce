import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/userContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select } from "antd";
import "../../styles/CreateProdcutForm.css";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(1);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [auth] = useAuth();

  // function for getting all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/category/get-categories"
      );
      if (data?.success) {
        setCategories(data.categories);
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  console.log("category to be uplaoded => ", category);

  useEffect(() => {
    getAllCategories();
    // Eslint disabled
  }, []);

  const navigate = useNavigate();

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("rating", rating);
    myForm.set("stock", stock);
    myForm.set("category", category);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    //Dispatch
    const res = await axios.post(
      "https://backendd-delta.vercel.app/api/v1/product/create-product",
      myForm
    );
    if (res.data.success) {
      toast.success("Product Create sucecssfully");
      navigate("/dashboard/all-product");

      console.log(res);
    } else {
      alert("Something went wrong");
    }
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="newProductContainer">
        <div className="left__create__product__container">
          <div className=" w-[100%] form-control border-none">
            <Select
              bordered={false}
              placeholder="Select a category"
              size="large"
              showSearch={true}
              className="form-select mb-3"
              onChange={(value) => {
                setCategory(value);
              }}
            >
              {categories &&
                categories.map((c) => <Option key={c._id}>{c.name}</Option>)}
            </Select>
          </div>
          {/* <div className="w-75 create__prodcut__form"> */}
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <div className="">
              <div className="form-control border-none">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="form-control "
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control border-none">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-control border-none">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rating"
                  required
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="form-control border-none">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock"
                  required
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div className="form-control border-none">
                <textarea
                  className="form-control"
                  placeholder="Product Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="1"
                ></textarea>
              </div>
              <div
                id="createProductFormFile"
                className="form-control border-none"
              >
                <input
                  className="form-control"
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={createProductImagesChange}
                  multiple
                />
              </div>
            </div>

            <button
              id="createProductBtn"
              type="submit"
              className="btn btn-primary bg-blue-950 text-white mt-3 ml-3 w-[96%]"
            >
              Create
            </button>
          </form>
        </div>

        <div className="right__create__prodcut__container">
          <div
            id="createProductFormImage"
            className="w-30 flex flex-wrap right__show__image"
          >
            {imagesPreview.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Product Preview"
                className="w-[150px] ml-14 m-2 image__preview"
              />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CreateProductForm;
