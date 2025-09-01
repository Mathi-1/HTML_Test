import React, { useState } from "react";
import mockUsers from "../data/mockdata.js";

function Login({ setUser }) {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    const user = mockUsers.find((u) => u.mobile === mobile);
    if (user) {
      setUser(user);
    } else {
      alert("User not found!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
