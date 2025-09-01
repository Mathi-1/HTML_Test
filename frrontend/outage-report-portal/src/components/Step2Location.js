import React, { useState } from "react";

const Step2Location = ({ location, onChange, nextStep, prevStep }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!location.trim()) {
      setError("Location is required");
    } else {
      setError("");
      nextStep();
    }
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Enter your location</label>
      <input
        type="text"
        value={location}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Location"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Location;
