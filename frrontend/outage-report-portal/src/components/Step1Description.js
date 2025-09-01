import React, { useState } from "react";

const Step1Description = ({ description, onChange, nextStep }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!description.trim()) {
      setError("Description is required");
    } else {
      setError("");
      nextStep();
    }
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Describe the issue</label>
      <textarea
        value={description}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Describe the service outage..."
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step1Description;
