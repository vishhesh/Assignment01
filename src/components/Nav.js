import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav({ user, isReady }) {
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          {user.name}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {isReady && (
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {user && (
                <>
                <li class="nav-item ">
                  <Link className="nav-link" to="/me">
                    Me
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
                </>
              )}

              {!user && (
                <>
                  <li class="nav-item ">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item ">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

const styles = {
  nav: {
    backgroundColor: "rgba(10,10,10,0.2)",
  },
  ul: {},
  li: {
    display: "inline",
    padding: 10,
    textDecorationStyle: "none",
  },
};
