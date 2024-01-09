import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/user/all-users"
      );
      console.log(data);
      setUsers(data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container-fluid m-3 p-3 mt-9">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-10">
            <h1 className="text-6xl font-extrabold text-[#33475b] ml-2">
              All Users
            </h1>
            <div className="w-75">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => (
                      <tr>
                        <>
                          <td key={user._id}>{user.name}</td>
                          <td key={user._id}>{user.email}</td>
                          <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger ms-2">
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
        </div>
      </div>
    </>
  );
};

export default AllUsers;
