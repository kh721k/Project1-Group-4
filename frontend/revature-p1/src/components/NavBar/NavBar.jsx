import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

// TODO: rerender when logged in/out

function NavBar() {
  const sessionUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {}, [sessionUser]);

  return (
    <nav>
      <div className="nav-bar">
        <div className="bar">
          <button>
            <NavLink to="/"> Home </NavLink>
          </button>
          {!sessionUser ? (
            <>
              <button>
                <NavLink to="/login"> Login </NavLink>
              </button>
              <button>
                <NavLink to="/register"> Registration </NavLink>
              </button>
            </>
          ) : (
            <button>
              <NavLink to="/logout"> Log Out </NavLink>
            </button>
          )}
        </div>
        {sessionUser && (
          <>
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
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
