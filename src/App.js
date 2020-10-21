import React from "react";
import Login from "./components/Login";
import AuthContextProvider from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
        <AuthContextProvider>
          <Login />
        </AuthContextProvider>

    </div>
  );
}

export default App;