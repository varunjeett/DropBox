import React,{useState} from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Chatwindow from "./Chatwindow.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login.js';
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch]= useStateValue();
  
  return (
    <div className="app">
      <Router>
        {/* if no user logged in , show the login page otherwise show the contents */}
        
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />

              <Switch>
                {/* :roomID is a wildcard */}
                <Route path="/Rooms/:roomId">
                  <h1>
                    <Chatwindow />
                  </h1>
                </Route>

                <Route path="/">
                  <h1>Home Screen</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}

        {/* header */}
      </Router>
    </div>
  );
}

export default App;
