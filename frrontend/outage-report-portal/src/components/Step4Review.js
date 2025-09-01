import React from "react";

const Step4Review = ({ formData, prevStep, onSubmit }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Review Your Report</h3>
      <p><strong>Description:</strong> {formData.description}</p>
      <p><strong>Location:</strong> {formData.location}</p>
      <div>
        <strong>Files:</strong>
        <ul>
          {formData.files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4Review;
