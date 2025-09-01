import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.brand}>MNP Portal</h2>
      <div>
        <Link to="/" style={styles.link}>Login</Link>
        <Link to="/request" style={styles.link}>Request</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        {isLoggedIn && (
          <button onClick={onLogout} style={styles.button}>Logout</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#333",
    color: "#fff",
  },
  brand: { margin: 0 },
  link: { margin: "0 10px", color: "#fff", textDecoration: "none" },
  button: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
