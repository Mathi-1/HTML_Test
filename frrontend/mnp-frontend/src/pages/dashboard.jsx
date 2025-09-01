import React from "react";

function Dashboard({ user, setUser }) {
  const approveRequest = () => {
    if (user.status === "Pending") {
      setUser({
        ...user,
        status: "Completed",
        operator: user.requestedOperator,
      });
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Mobile: {user.mobile}</p>
      <p>Operator: {user.operator}</p>
      <p>Status: {user.status}</p>
      {user.status === "Pending" && (
        <button onClick={approveRequest}>Approve Request (Admin)</button>
      )}
    </div>
  );
}

export default Dashboard;
