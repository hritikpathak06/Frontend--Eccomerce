import React from "react";
import UserMenu from "../../components/UserMenu/UserMenu";
import { useAuth } from "../../context/userContext";
import "./userDashboard.css"

const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div className="container-fluid m-3 p-3 main__user__dashboard">
        <div className="row">
          <div className="col-md-3 user__menu">
            <UserMenu />
          </div>
          <div className="col-md-9 user__dashboard">
            <div className="card w-75 p-3 flex items-center user__card">
              <img
                src={auth?.user.avatar}
                alt=""
                className="user__img"
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
