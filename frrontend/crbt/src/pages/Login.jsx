import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (mobile.trim() !== "") {
      setUser({ mobile });
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleLogin} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}
