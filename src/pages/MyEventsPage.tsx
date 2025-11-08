import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { IEvent, hardcodedEvents } from "../data";

export default function MyEventsPage() {
  const [savedEvents, setSavedEvents] = useState<IEvent[]>([]);

  // This function loads the saved events from storage
  const loadSavedEvents = () => {
    const savedEventIDs = JSON.parse(
      localStorage.getItem("savedEvents") || "[]"
    ) as number[];

    const myEvents = hardcodedEvents.filter(
      (event) => savedEventIDs.indexOf(event.id) !== -1
    );
    setSavedEvents(myEvents);
  };

  // Load events when the page first opens
  useEffect(() => {
    loadSavedEvents();
  }, []);

  // --- NEW: Function to remove an event ---
  const handleRemoveEvent = (eventIdToRemove: number) => {
    // 1. Get the current list of saved IDs
    let savedEventIDs = JSON.parse(
      localStorage.getItem("savedEvents") || "[]"
    ) as number[];

    // 2. Filter out the event we want to remove
    const newSavedEventIDs = savedEventIDs.filter(
      (id) => id !== eventIdToRemove
    );

    // 3. Save the new, smaller list back to localStorage
    localStorage.setItem("savedEvents", JSON.stringify(newSavedEventIDs));

    // 4. Reload the events on the page to show the change
    loadSavedEvents();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Saved Events</h1>
      {savedEvents.length === 0 ? (
        <p style={{ textAlign: "center" }}>You haven't saved any events yet.</p>
      ) : (
        savedEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            showRemoveButton={true} // <-- NEW: Tell the card to show "Remove"
            onRemove={handleRemoveEvent} // <-- NEW: Pass the remove function
          />
        ))
      )}
    </div>
  );
}
