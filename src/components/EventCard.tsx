import React, { useState } from "react";
import { IEvent } from "../data";
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- Gemini Setup ---
const API_KEY = "YOUR_API_KEY_HERE"; // 🚨 PASTE YOUR KEY HERE
const genAI = new GoogleGenerativeAI(API_KEY);
const geminiModel = genAI.getGenerativeModel({
  model: "gemini-2.5-pro-latest",
});

// --- Component Props ---
interface EventCardProps {
  event: IEvent;
  showRemoveButton?: boolean;
  onRemove?: (id: number) => void;
  showAdminButtons?: boolean; // <-- NEW: For organizers
  onDelete?: (id: number) => void; // <-- NEW: For organizers
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  showRemoveButton = false,
  onRemove,
  showAdminButtons = false, // <-- NEW
  onDelete,
}) => {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // --- AI Summary Function ---
  const getAiSummary = async (): Promise<void> => {
    setIsLoading(true);
    setSummary("");
    const prompt = `Generate a concise, 1-2 sentence "teaser" summary for this event description: "${event.description}"`;
    try {
      const result = await geminiModel.generateContent(prompt);
      setSummary(result.response.text());
    } catch (error) {
      console.error("Gemini error:", error);
      setSummary("Error: Could not get summary from AI.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- "Save" Function (for participants) ---
  const saveEvent = () => {
    let savedEventIDs = JSON.parse(
      localStorage.getItem("savedEvents") || "[]"
    ) as number[];
    if (savedEventIDs.indexOf(event.id) === -1) {
      savedEventIDs.push(event.id);
      localStorage.setItem("savedEvents", JSON.stringify(savedEventIDs));
      alert(`Saved "${event.eventName}"!`);
    } else {
      alert("Event already saved!");
    }
  };

  // --- "Remove" Function (for participants) ---
  const handleRemoveClick = () => {
    if (onRemove) {
      onRemove(event.id);
    }
  };

  // --- "Delete" Function (for organizers) ---
  const handleDeleteClick = () => {
    if (onDelete) {
      if (window.confirm("Are you sure you want to delete this event?")) {
        onDelete(event.id);
      }
    }
  };

  return (
    <div className="event-card">
      <h2>{event.eventName}</h2>
      <p className="host">by {event.hostSocietyName}</p>

      <div className="topics">
        {event.topics.map((topic) => (
          <span key={topic} className="topic-tag">
            {topic}
          </span>
        ))}
      </div>

      <h3>Description</h3>
      <p className="description">{event.description}</p>

      {/* --- AI Summary Button (for everyone) --- */}
      <button onClick={getAiSummary} disabled={isLoading} className="ai-button">
        {isLoading ? "Getting summary..." : "✨ Get AI Summary"}
      </button>

      {/* --- NEW: Conditional Button Logic --- */}
      {showAdminButtons ? (
        <div className="admin-buttons">
          <button className="edit-button">Edit</button>
          <button onClick={handleDeleteClick} className="delete-button">
            Delete
          </button>
        </div>
      ) : showRemoveButton ? (
        <button onClick={handleRemoveClick} className="remove-button">
          Remove from Saved
        </button>
      ) : (
        <button onClick={saveEvent} className="save-button">
          Save for Later
        </button>
      )}

      {summary && (
        <div className="ai-summary">
          <strong>AI-Powered Summary:</strong>
          <p>{summary}</p>
        </div>
      )}

      <a
        href={event.eventURL}
        className="register-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Now
      </a>
    </div>
  );
};

export default EventCard;
