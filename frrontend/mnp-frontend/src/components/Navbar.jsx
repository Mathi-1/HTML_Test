import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onLogout, isLoggedIn }) {
  return (
    <nav className="navbar">
      <h2>MNP Portal</h2>
      <div>
        <Link to="/">Login</Link>
        {isLoggedIn && (
          <>
            <Link to="/request">Request MNP</Link>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
