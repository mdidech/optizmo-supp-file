import React from "react";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className='App'>
        <AuthContextProvider>
          <Router>

          <Login />
          </Router>
        </AuthContextProvider>

    </div>
  );
}

export default App;