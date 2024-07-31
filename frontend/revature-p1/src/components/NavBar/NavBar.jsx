import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="nav-bar">
        <div className="bar">
          <button>
            <NavLink to="/feed"> Home </NavLink>
          </button>
          <button>
            <NavLink to="/login"> Login </NavLink>
          </button>
          <button>
            <NavLink to="/registration"> Registration </NavLink>
          </button>
        </div>
        <div className="bar">
          <button>
            <NavLink to="/users/:username"> Profile </NavLink>
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
