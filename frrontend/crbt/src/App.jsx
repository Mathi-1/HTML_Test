import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import BrowseTones from "./pages/BrowseTones";
import Dashboard from "./pages/Dashboard";

function App() {
  const [user, setUser] = useState(null); // { mobile: "" }
  const [activeTone, setActiveTone] = useState(null);

  const handleLogout = () => {
    setUser(null);
    setActiveTone(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route
          path="/browse"
          element={<BrowseTones activeTone={activeTone} setActiveTone={setActiveTone} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard user={user} activeTone={activeTone} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
