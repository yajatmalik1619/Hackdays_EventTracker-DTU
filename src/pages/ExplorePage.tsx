import React from "react";
import EventCard from "../components/EventCard";
import { hardcodedEvents } from "../data"; // We just import all events

export default function ExplorePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Explore All Events</h1>
      {hardcodedEvents.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          // Note: We don't pass the "remove" props here
        />
      ))}
    </div>
  );
}
