import React from "react";
import UserMenu from "../../components/UserMenu/UserMenu";
import { useAuth } from "../../context/userContext";

const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 flex items-center">
              <img
                src={auth?.user.avatar}
                alt=""
                style={{
                  width: "300px",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
              <h1>User Name: {auth.user.name}</h1>
              <h1>User Email: {auth.user.email}</h1>
              <h1>User Conatact: {auth.user.phone}</h1>
              <h1>User Address: {auth.user.address}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
