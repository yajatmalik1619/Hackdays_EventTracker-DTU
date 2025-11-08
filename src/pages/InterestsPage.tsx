import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- UPDATED: New topics added to the list ---
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
];

export default function InterestsPage() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    const savedInterests = JSON.parse(
      localStorage.getItem("userInterests") || "[]"
    ) as string[];
    setSelectedTopics(savedInterests);
  }, []);

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

  const handleExploreAll = () => {
    setSelectedTopics([]);
    localStorage.removeItem("userInterests");
    navigate("/feed");
  };

  const handleGoToFeed = () => {
    localStorage.setItem("userInterests", JSON.stringify(selectedTopics));
    navigate("/feed");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>What are you interested in?</h1>
      <p style={{ textAlign: "center" }}>
        Select your interests to customize your event feed.
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

      <div className="navigation-buttons">
        <button className="explore-all-button" onClick={handleExploreAll}>
          Browse All Events
        </button>
        <button className="go-to-feed-button" onClick={handleGoToFeed}>
          Move onto the events page
        </button>
      </div>
    </div>
  );
}
