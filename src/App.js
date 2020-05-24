import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Loading from "./components/Loading";

import { Home, Me, Login, Signup, Logout } from "./components/screens";

function App() {
  // const userContext = React.createContext(null);
  const [user, setUser] = useState("");
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function getLocalUserToken() {
      let user = await window.localStorage.getItem("user");
      setIsReady(true);
      if(user){
        setUser(user);
      }
    }
    getLocalUserToken();
  });

  return (
    <Router>
      <Header title="Calinderr" />
      <Nav isReady={isReady} user={user} />
      <div>
        <Switch>
          <Route path="/logout">
            <Logout setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/me">
            <Me user={user} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
