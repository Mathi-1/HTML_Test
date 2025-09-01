import React, { useState } from "react";

export default function PhoneUpcForm() {
  const [phone, setPhone] = useState("");
  const [upc, setUpc] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const [result, setResult] = useState("");

  // Handles form submission or UPC recovery
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (forgotMode) {
      // Call endpoint for UPC recovery
      const res = await fetch("/api/forgot-upc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msisdn: phone }),
      });
      const data = await res.json();
      setResult(data.upc ? `Your UPC is: ${data.upc}` : "UPC not found.");
    } else {
      // Submit full form to backend
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ msisdn: phone, upc }),
      });
      const data = await res.json();
      setResult(data.message || "Submitted!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
          pattern="[0-9]{10,14}"
          required
        />
      </div>
      {!forgotMode && (
        <div>
          <label>UPC Code:</label>
          <input
            type="text"
            value={upc}
            onChange={(e) => setUpc(e.target.value)}
            required
          />
        </div>
      )}
      <button type="submit">
        {forgotMode ? "Recover UPC" : "Submit"}
      </button>
      {!forgotMode && (
        <button
          type="button"
          onClick={() => {
            setForgotMode(true);
            setUpc("");
            setResult("");
          }}
        >
          Forgot UPC Code?
        </button>
      )}
      <div style={{ marginTop: "1em", color: "green" }}>
        {result}
      </div>
    </form>
  );
}
