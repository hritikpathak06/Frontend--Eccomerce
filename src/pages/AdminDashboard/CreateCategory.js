import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSeleted] = useState(null);
  const [updateName, setUpdateName] = useState("");

  // function for creating the category
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://backendd-delta.vercel.app/api/v1/category/create-category",
        { name }
      );
      if (data?.success) {
        toast.success(`${data.category.name} Category Created Successfuly`);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Category Already Exists");
    }
  };

  // function for getting all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/category/get-categories"
      );
      // console.log(data);
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

  useEffect(() => {
    getAllCategories();
    // Eslint disabled
  }, []);

  // update fubnction for updating the category
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(
        `https://backendd-delta.vercel.app/api/v1/category/update-category/${selected}`,
        { name: updateName }
      );
      if (data?.success) {
        setSeleted(null);
        setVisible(false);
        setUpdateName("");
        toast.success(`${data.category.name} Category Updated Successfuly`);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while updating the category");
    }
  };

  //  Delete Category function
  const handleDelete = async (id) => {
    // console.log(id);
    try {
      const { data } = await axios.delete(
        `https://backendd-delta.vercel.app/api/v1/category/delete-category/${id}}`
      );
      if (data?.success) {
        toast.success(`${data.category.name} Category Deleted Successfuly`);
        getAllCategories();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while Deleting the category");
    }
  };

  return (
    <>
      <div className="container-fluid m-3 p-3 mt-9">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-10">
            <h1 className="text-6xl font-extrabold text-[#33475b] ml-2">
              Manage Category
            </h1>
            <div className="p-3 w-50">
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((category) => (
                      <tr>
                        <>
                          <td key={category._id}>{category.name}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                setVisible(true);
                                setUpdateName(category.name);
                                setSeleted(category._id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => {
                                handleDelete(category._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CategoryForm
              value={updateName}
              setValue={setUpdateName}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
