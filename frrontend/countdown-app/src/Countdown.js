import React, { useState, useEffect, useRef } from "react";

const Countdown = () => {
  const [time, setTime] = useState(""); // input value
  const [countdown, setCountdown] = useState(0); // actual timer value
  const [isRunning, setIsRunning] = useState(false); // is counting or paused
  const timerRef = useRef(null); // reference for setInterval

  // Start, Pause, Resume logic
  const handleStartPause = () => {
    if (!isRunning && countdown === 0 && time > 0) {
      setCountdown(Number(time)); // start fresh
      setIsRunning(true);
    } else if (!isRunning && countdown > 0) {
      setIsRunning(true); // resume
    } else {
      setIsRunning(false); // pause
    }
  };

  // Cancel logic
  const handleCancel = () => {
    setIsRunning(false);
    setCountdown(0);
    setTime("");
  };

  // Countdown effect
  useEffect(() => {
    if (isRunning && countdown > 0) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, countdown]);

  // Reset when countdown reaches 0
  useEffect(() => {
    if (countdown === 0 && isRunning) {
      setIsRunning(false);
    }
  }, [countdown, isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ fontSize: "24px", marginBottom: "20px" }}>
        Countdown: <span>{countdown > 0 ? countdown : "0"}</span>
      </div>

      <div>
        <InputCount time={time} setTime={setTime} disabled={isRunning} />
      </div>

      <div>
        <PauseResumeButton
          isRunning={isRunning}
          countdown={countdown}
          time={time}
          onClick={handleStartPause}
        />
      </div>

      <div>
        <CancelButton onClick={handleCancel} />
      </div>
    </div>
  );
};

const InputCount = ({ time, setTime, disabled }) => {
  return (
    <input
      type="number"
      placeholder="Please set time"
      value={time}
      min="1"
      max="60"
      onChange={(e) => setTime(e.target.value)}
      disabled={disabled}
      style={{ padding: "8px", marginBottom: "20px" }}
    />
  );
};

const PauseResumeButton = ({ isRunning, countdown, time, onClick }) => {
  let buttonText = "Start";
  if (isRunning) buttonText = "Pause";
  else if (!isRunning && countdown > 0 && time) buttonText = "Continue";

  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "10px 20px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      disabled={time < 1 || time > 60}
    >
      {buttonText}
    </button>
  );
};

const CancelButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "10px",
        padding: "10px 20px",
        background: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Cancel
    </button>
  );
};

export default Countdown;
