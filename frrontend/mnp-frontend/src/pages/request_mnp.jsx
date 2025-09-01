import React, { useState } from "react";

function RequestMNP({ user, setUser }) {
  const [newOperator, setNewOperator] = useState("");

  const handleSubmit = () => {
    if (!newOperator) {
      alert("Please select a new operator");
      return;
    }
    setUser({ ...user, status: "Pending", requestedOperator: newOperator });
  };

  return (
    <div className="container">
      <h2>Request MNP</h2>
      <p>Current Operator: {user.operator}</p>
      <select value={newOperator} onChange={(e) => setNewOperator(e.target.value)}>
        <option value="">Select New Operator</option>
        <option value="Airtel">Airtel</option>
        <option value="Jio">Jio</option>
        <option value="VI">VI</option>
        <option value="BSNL">BSNL</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default RequestMNP;
