import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import { IEvent, hardcodedEvents } from "../data";

export default function RecommendationsPage() {
  const [recommendedEvents, setRecommendedEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    // --- This is our "Recommendation Agent" Logic ---

    // 1. Get user's EXPLICIT interests
    const explicitInterests = JSON.parse(
      localStorage.getItem("userInterests") || "[]"
    ) as string[];

    // 2. Get user's SAVED event IDs
    const savedEventIDs = JSON.parse(
      localStorage.getItem("savedEvents") || "[]"
    ) as number[];

    // 3. Find IMPLICIT interests from saved events
    const implicitInterestSet = new Set<string>();
    savedEventIDs.forEach((id) => {
      const savedEvent = hardcodedEvents.find((event) => event.id === id);
      if (savedEvent) {
        savedEvent.topics.forEach((topic) => implicitInterestSet.add(topic));
      }
    });
    const implicitInterests = Array.from(implicitInterestSet);

    // 4. Combine all interests into one "user profile"
    const combinedProfile = new Set([
      ...explicitInterests,
      ...implicitInterests,
    ]);
    const userProfileTopics = Array.from(combinedProfile);

    // 5. Filter all events to find recommendations
    const recommendations = hardcodedEvents.filter((event) => {
      // Check if the event is ALREADY SAVED
      const isAlreadySaved = savedEventIDs.indexOf(event.id) !== -1;
      if (isAlreadySaved) {
        return false;
      }

      // Check if the event matches any topic in the user's profile
      return event.topics.some(
        (topic) => userProfileTopics.indexOf(topic) !== -1
      );
    });

    setRecommendedEvents(recommendations);
  }, []); // This runs once when the page loads

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Recommendations For You</h1>
      <p style={{ textAlign: "center" }}>
        Based on your interests and saved events.
      </p>
      {recommendedEvents.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No new recommendations found. Try saving some events from the "Explore
          All" page!
        </p>
      ) : (
        recommendedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}
    </div>
  );
}
