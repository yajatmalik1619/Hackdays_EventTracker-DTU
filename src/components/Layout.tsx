import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// Simple interface for our mock user
interface User {
  role: string;
  name: string;
}

// --- Navigation component is now inside Layout ---
function Navigation({ role }: { role: string }) {
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* --- This link is for EVERYONE --- */}
      <a href="/" onClick={handleLogout}>
        Change User / Logout
      </a>

      {/* --- PARTICIPANT Links --- */}
      {role === "participant" && (
        <>
          <a href="/feed">My Feed</a>
          <a href="/explore">Explore All</a>
          <a href="/recommendations">Recommendations</a>
          <a href="/my-events">My Saved Events</a>
          <a href="/edit-interests">Manage Interests</a> {/* <-- NEW LINK */}
        </>
      )}

      {/* --- ORGANIZER Links --- */}
      {role === "organizer" && (
        <>
          <a href="/dashboard">Dashboard</a>
          <a href="/my-posted-events">My Posted Events</a>
        </>
      )}
    </nav>
  );
}

// --- Layout component (The Gatekeeper) ---
const Layout: React.FC = () => {
  const userString = localStorage.getItem("currentUser");

  if (!userString) {
    // No user found, redirect to signup
    return <Navigate to="/" replace />;
  }

  // We have a user, let's parse them
  const user = JSON.parse(userString) as User;

  // User is found, so show the Navbar (with their role) and the page
  return (
    <>
      <Navigation role={user.role} />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
