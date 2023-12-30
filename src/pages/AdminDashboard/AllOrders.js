import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useAuth } from "../../context/userContext";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
// import {Select} from "antd";
// const {Options} = Select;

const AllOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getAllOrders = async () => {
    try {
      const { data } = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/user/all-orders"
      );
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const deleteMyOrdrder = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to cancel this order?"
      );
      if (!confirmed) {
        return;
      }
      const { data } = await axios.delete(
        `https://backendd-delta.vercel.app/api/v1/user/delete-order/${id}`
      );
      toast.success("Your Order Has Been Canceled Successfully");
      getAllOrders();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getAllOrders();
    }
  }, [auth.token]);

  const handleUpdateChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `https://backendd-delta.vercel.app/api/v1/user/order-status/${orderId}`,
        { status: value }
      );
      if (data.success) {
        toast.success("Order Status Updated Successfully");
        getAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-10 ">
            <h1 className="text-6xl font-extrabold text-[#33475b] text-center">
              All Orders
            </h1>

            {orders &&
              orders.map((order, index) => (
                <>
                  <div className="border shadow mt-5">
                    <table className="table mt-3">
                      <thead className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td>{index + 1}</td>
                          <td>
                            <Select
                              bordered={false}
                              onChange={(value) =>
                                handleUpdateChange(order._id, value)
                              }
                              defaultValue={order.status}
                            >
                              {status.map((s, i) => (
                                <option key={i} value={s}>
                                  {s}
                                </option>
                              ))}
                            </Select>
                          </td>
                          <td>{order.buyer.name}</td>
                          <td>{moment(order.createdAt).fromNow()}</td>
                          <td>
                            {order.payment.success ? "Success" : "Failed"}
                          </td>
                          <td>{order.products?.length}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      <div className="container">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteMyOrdrder(order._id)}
                        >
                          Cancel
                        </button>
                        {order?.products?.map((p, i) => (
                          <div
                            className="row mb-2 p-3 card flex-row mt-3"
                            key={p._id}
                          >
                            <div className="col-md-3">
                              <img
                                src={p.images[1].url}
                                alt={p.name}
                                style={{ height: "150px", marginLeft: "2rem" }}
                              />
                            </div>
                            <div className="col-md-4 w-75 ">
                              <p className="text-[#33475b] text-2xl font-extrabold">
                                {p.name}
                              </p>
                              <p className="">
                                {p.description.substring(0, 300)}.......
                              </p>
                              <p className="text-2xl mt-2 text-red-400 font-extrabold">
                                {p.price.toLocaleString("INR", {
                                  style: "currency",
                                  currency: "INR",
                                })}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllOrders;
