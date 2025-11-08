import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This is a list of all possible interests you want to show
const allTopics = [
  "AI",
  "ML",
  "Hackathon",
  "Design",
  "UI/UX",
  "Graphic Design",
  "Cybersecurity",
  "CTF",
  "Web",
  "Crypto",
  "Forensics",
  "Pwn",
  "Hardware",
  "Cultural",
  "Dance",
  "Music",
  "Engifest",
  "Theatre",
  "Debate",
  "MUN",
  "Public Speaking",
  "Social Work",
  "NSS",
  "Community",
  "Health",
  "GDSC",
  "Workshop",
  "App Dev",
  "Mobile Dev",
  "Business",
  "E-Cell",
  "Fintech",
  "Quiz",
  "Literature",
  "Gaming",
  "E-Sports",
  "Sports",
  "Automotive",
  "Mechanical",
  "Recruitment",
  "Showcase",
  "Wellness",
  "Career",
  "Open Source",
  "IEEE",
  "Pratibimb",
];

export default function EditInterestsPage() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Load saved interests when the page loads
  useEffect(() => {
    const savedInterests = JSON.parse(
      localStorage.getItem("userInterests") || "[]"
    ) as string[];
    setSelectedTopics(savedInterests);
  }, []);

  // Toggles topics on/off
  const handleTopicClick = (topic: string) => {
    setSelectedTopics((prevTopics) => {
      const isAlreadySelected = prevTopics.indexOf(topic) !== -1;
      if (isAlreadySelected) {
        return prevTopics.filter((t) => t !== topic);
      } else {
        return [...prevTopics, topic];
      }
    });
  };

  // --- NEW: Saves changes and goes to the feed ---
  const handleSaveChanges = () => {
    localStorage.setItem("userInterests", JSON.stringify(selectedTopics));
    alert("Interests Updated!");
    navigate("/feed"); // Go back to the feed to see changes
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Manage Your Interests</h1>
      <p style={{ textAlign: "center" }}>
        Add or remove topics to customize your event feed.
      </p>
      <div className="topics-container">
        {allTopics.map((topic) => (
          <button
            key={topic}
            className={`topic-choice-button ${
              selectedTopics.indexOf(topic) !== -1 ? "selected" : ""
            }`}
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* --- NEW Button --- */}
      <div className="navigation-buttons">
        <button className="save-changes-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
