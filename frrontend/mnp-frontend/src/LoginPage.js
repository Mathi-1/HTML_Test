import React from "react";

function LoginPage({ onLogin }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
