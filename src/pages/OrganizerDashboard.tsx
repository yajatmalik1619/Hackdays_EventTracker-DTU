import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Simple interface for our mock user
interface User {
  role: string;
  name: string;
}

export default function OrganizerDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is logged in
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      setUser(parsedUser);
      // Kick out non-organizers
      if (parsedUser.role !== "organizer") {
        navigate("/");
      }
    } else {
      // Kick out non-logged-in users
      navigate("/");
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>; // Show loading while we check
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome, {user.name}!</h1>
      <p style={{ textAlign: "center" }}>This is your Organizer Dashboard.</p>
      <div className="event-card" style={{ textAlign: "center" }}>
        <h3>Your Events</h3>
        <p>You haven't posted any events yet.</p>
        <button
          className="go-to-feed-button"
          style={{ maxWidth: "300px", margin: "auto" }}
        >
          Create New Event
        </button>
      </div>
    </div>
  );
}
