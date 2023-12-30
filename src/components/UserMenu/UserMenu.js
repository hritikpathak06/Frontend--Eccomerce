import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <div className="text-center mt-10">
        <div className="list-group">
          <NavLink
            to="/dashboard/user"
            className="list-group-item list-group-item-action"
          >
            User Panel
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className="list-group-item list-group-item-action"
          >
            My Ordes
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
