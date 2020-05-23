import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Nav({user, isReady }) {
  console.log(isReady);
  console.log(user);
  return (
    <div>
      {isReady && (
          <nav style={styles.nav}>
            <ul style={styles.ul}>
              <li style={styles.li}>
                <Link to="/">Home</Link>
              </li>
              {!user && 
                <>
                  <li style={styles.li}>
                    <Link to="/login">Login</Link>
                  </li>
                  <li style={styles.li}>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              }
              {user && 
                  <li style={styles.li}>
                    <Link to="/logout" style = {{textDecorationStyle: 'none', textDecorationLine : 'none', color: 'black'}}>Logout</Link>
                  </li>
              }
            </ul>
          </nav>
        )}
    </div>
  );
}



const styles = {
    nav : {
      backgroundColor: 'rgba(10,10,10,0.2)',
    },
    ul : {

    },
    li :{
      display: 'inline',
      padding: 10, 
      textDecorationStyle : 'none', 

    }
  }
