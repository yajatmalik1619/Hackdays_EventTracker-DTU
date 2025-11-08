import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { IEvent, hardcodedEvents } from "../data";

export default function EventFeedPage() {
  const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    // 1. Get the user's interests from localStorage
    const userInterests = JSON.parse(
      localStorage.getItem("userInterests") || "[]"
    ) as string[];

    // 2. If no interests, show all events
    if (userInterests.length === 0) {
      setFilteredEvents(hardcodedEvents);
      return;
    }

    // 3. Filter the hardcoded events
    const newFilteredEvents = hardcodedEvents.filter((event) => {
      // --- THE FIX IS HERE ---
      // We check if any of the event's topics are in the user's interest list
      // We must use .some() and .indexOf() for compatibility
      return event.topics.some((topic) => userInterests.indexOf(topic) !== -1);
      // --- --- --- --- ---
    });

    setFilteredEvents(newFilteredEvents);
  }, []); // This runs once when the page loads

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Feed</h1>
      {filteredEvents.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No events match your selected interests. Go to the "Interests" page to
          add more, or check the "Explore All" page.
        </p>
      ) : (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}
    </div>
  );
}
