import React, { useEffect, useState } from "react";
import { useAuth } from "../context/userContext";
import { Outlet } from "react-router-dom";
import axios from "axios";

const UserRoutes = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "https://backendd-delta.vercel.app/api/v1/user/user-auth"
      );
      if (res?.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      {
        authCheck();
      }
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : "spinner";
};

export default UserRoutes;
