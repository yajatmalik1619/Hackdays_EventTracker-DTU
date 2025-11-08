import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { IEvent, hardcodedEvents } from "../data";
import { useNavigate } from "react-router-dom";

interface User {
  role: string;
  name: string; // This is the society name for organizers
}

export default function MyPostedEventsPage() {
  const [myEvents, setMyEvents] = useState<IEvent[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Get the current user
    const userString = localStorage.getItem("currentUser");
    if (!userString) {
      navigate("/"); // Not logged in
      return;
    }
    const user = JSON.parse(userString) as User;

    // 2. Check if they are an organizer
    if (user.role !== "organizer") {
      navigate("/feed"); // Send participants to their feed
      return;
    }

    // 3. Filter all events to find ones that match this organizer's name
    const postedEvents = hardcodedEvents.filter(
      (event) => event.hostSocietyName === user.name
    );

    setMyEvents(postedEvents);
  }, [navigate]);

  const handleDelete = (eventId: number) => {
    // In a real app, you'd call an API. Here, we just filter the state.
    setMyEvents((prevEvents) =>
      prevEvents.filter((event) => event.id !== eventId)
    );
    alert(`Event ${eventId} would be deleted from the database.`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Posted Events</h1>
      {myEvents.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          You have not posted any events. (Note: This demo matches your Society
          Name to the 'hostSocietyName' in the data.)
        </p>
      ) : (
        myEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            showAdminButtons={true} // <-- NEW: Show Edit/Delete
            onDelete={handleDelete} // <-- NEW: Pass the delete function
          />
        ))
      )}
    </div>
  );
}
