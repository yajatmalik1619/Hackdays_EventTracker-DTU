import React, { useState, useEffect } from "react"; // <-- Import useEffect
import { useNavigate } from "react-router-dom";
import "../styles.css";

type Role = "participant" | "organizer";

// Simple interface for our mock user
interface User {
  role: string;
  name: string;
}

export default function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<Role | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    branch: "",
    societyName: "",
    number: "",
  });

  // --- NEW: Redirect if already logged in ---
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      // Redirect to the correct dashboard
      if (parsedUser.role === "organizer") {
        navigate("/dashboard");
      } else {
        navigate("/feed"); // Or /interests, your choice
      }
    }
  }, [navigate]); // Add navigate as a dependency

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role) return;

    const user = {
      role: role,
      email: formData.email,
      name: role === "participant" ? formData.name : formData.societyName,
      branch: role === "participant" ? formData.branch : null,
      number: role === "organizer" ? formData.number : null,
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.removeItem("userInterests");
    localStorage.removeItem("savedEvents");

    if (role === "participant") {
      navigate("/interests");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      {" "}
      {/* We add this to center the signup form */}
      <div className="signup-container">
        <h1 style={{ textAlign: "center" }}>Welcome to EventBridge</h1>
        <p style={{ textAlign: "center" }}>First, who are you?</p>

        <div className="role-selector">
          <button
            className={`role-button ${
              role === "participant" ? "selected" : ""
            }`}
            onClick={() => setRole("participant")}
          >
            I am a <strong>Participant</strong>
            <span>(Looking for events)</span>
          </button>
          <button
            className={`role-button ${role === "organizer" ? "selected" : ""}`}
            onClick={() => setRole("organizer")}
          >
            I am an <strong>Organizer</strong>
            <span>(Posting an event)</span>
          </button>
        </div>

        {role && (
          <form className="signup-form" onSubmit={handleSubmit}>
            <h3>Please fill in your details:</h3>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@email.com"
            />
            {role === "participant" && (
              <>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Rohan Kumar"
                />
                <label htmlFor="branch">Your Branch</label>
                <input
                  type="text"
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  placeholder="e.g., COE, SE, IT"
                />
              </>
            )}
            {role === "organizer" && (
              <>
                <label htmlFor="societyName">Society/Organization Name</label>
                <input
                  type="text"
                  id="societyName"
                  name="societyName"
                  value={formData.societyName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., IEEE-DTU"
                />
                <label htmlFor="number">Contact Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 9912345678"
                />
              </>
            )}
            <button type="submit" className="go-to-feed-button">
              Register & Continue
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
