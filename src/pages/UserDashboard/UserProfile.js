import React from "react";
import UserMenu from "../../components/UserMenu/UserMenu";

const UserProfile = () => {
  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <h1>User Profile</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
