import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const sessionUser = JSON.parse(localStorage.getItem("user"));
  console.log("session user = ", sessionUser);

  return (
    <nav>
      <div className="nav-bar">
        <div className="bar">
          <button>
            <NavLink to="/"> Home </NavLink>
          </button>
          <button>
            <NavLink to="/login"> Login </NavLink>
          </button>
          <button>
            <NavLink to="/register"> Registration </NavLink>
          </button>
        </div>
        <div className="bar">
          <button>
            <NavLink to={`/user/${sessionUser?.username}`}>
              Profile {sessionUser?.username}
            </NavLink>
          </button>
          <button>
            <NavLink to="/create-post"> + </NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
