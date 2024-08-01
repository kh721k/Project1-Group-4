import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const nav = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    nav("/");
  };

  return (
    <div>
      <h1>Are you sure you want to logout?</h1>
      <button onClick={logout}>Yes I'm sure</button>
    </div>
  );
}

export default Logout;
