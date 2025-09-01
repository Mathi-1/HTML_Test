import React, { useState } from "react";

const Step3Files = ({ files, onChange, nextStep, prevStep }) => {
  const [preview, setPreview] = useState(files);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChange(selectedFiles);
    setPreview(selectedFiles);
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">Upload files/images</label>
      <input type="file" multiple onChange={handleFileChange} />
      <div className="mt-2">
        {preview.map((file, index) => (
          <p key={index} className="text-sm">
            {file.name}
          </p>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3Files;
