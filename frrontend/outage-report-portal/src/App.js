// src/App.js
import React from "react";
import OutageReportForm from "./components/OutageReportForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Service Outage Report</h1>
      <OutageReportForm />
    </div>
  );
}

export default App;
