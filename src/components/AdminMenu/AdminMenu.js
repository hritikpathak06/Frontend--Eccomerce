import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/AdminDashboard.css";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center position-relative">
        <div className="list-group admin__menu__panel ">
          <NavLink
            to="/dashboard/admin"
            className="list-group-item list-group-item-action p-2 mt-3"
          >
            Admin Panel
          </NavLink>
          <NavLink
            to="/dashboard/create-category"
            className="list-group-item list-group-item-action p-2 "
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/create-product"
            className="list-group-item list-group-item-action p-2 "
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/all-product"
            className="list-group-item list-group-item-action p-2"
          >
            All Product
          </NavLink>
          <NavLink
            to="/dashboard/all-orders"
            className="list-group-item list-group-item-action p-2 "
          >
            All Orders
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className="list-group-item list-group-item-action p-2 "
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
