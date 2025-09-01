import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <div className="space-x-4">
        <Link to="/">Login</Link>
        <Link to="/browse">Browse Tones</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      {user && (
        <button onClick={onLogout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      )}
    </nav>
  );
}
