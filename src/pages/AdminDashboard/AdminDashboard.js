import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import { useAuth } from "../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarChart from "../../components/BarChart/BarChart";
import "../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [auth] = useAuth();
  const [totalUsers, setTotalUsers] = useState(0);

  const data = [30, 20, 15, 10, 25];

  useEffect(() => {
    const getTotalUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://backendd-delta.vercel.app/api/v1/user/all-users"
        );
        // console.log(data)
        if (data?.success) {
          setTotalUsers(data.totalUsers);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong ");
      }
    };
    getTotalUsers();
  }, []);

  console.log(totalUsers);

  return (
    <>
      <div className="container-fluid m-3 p-3 mt-9">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-10">
            <div className="card w-75 p-5 flex items-center admin__dashboard">
              <div className="main__admin__dashboard">
                <div className="left__admin__dashboard">
                  <img src={auth?.user.avatar} alt="" />
                </div>
                <div className="right__admin__dashboard">
                  <h1>
                    Admin Name: <span>{auth.user.name}</span>
                  </h1>
                  <h1>
                    Admin Email: <span>{auth.user.email}</span>
                  </h1>
                  <h1>
                    Admin Conatact: <span>{auth.user.phone}</span>
                  </h1>
                  <h1>
                    Admin Address: <span>{auth.user.address}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-75  mt-10">
              <h1 className="text-6xl mb-8 text-center font-extrabold text-[#33475b]">
                Shop Easy Data
              </h1>
              <BarChart totalUsers={totalUsers} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
