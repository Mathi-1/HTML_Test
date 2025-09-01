import React, { useState } from "react";
import Step1Description from "./Step1Description";
import Step2Location from "./Step2Location";
import Step3Files from "./Step3Files";
import Step4Review from "./Step4Review";

const OutageReportForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    files: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted data:", formData);
    alert("Report submitted successfully!");
    setStep(1);
    setFormData({ description: "", location: "", files: [] });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Report Service Outage</h2>
      {step === 1 && (
        <Step1Description
          description={formData.description}
          onChange={(value) => handleChange("description", value)}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2Location
          location={formData.location}
          onChange={(value) => handleChange("location", value)}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3Files
          files={formData.files}
          onChange={(files) => handleChange("files", files)}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <Step4Review
          formData={formData}
          prevStep={prevStep}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default OutageReportForm;
