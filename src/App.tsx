import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SignupPage from "./pages/SignupPage";
import InterestsPage from "./pages/InterestsPage";
import EventFeedPage from "./pages/EventFeedPage";
import MyEventsPage from "./pages/MyEventsPage";
import ExplorePage from "./pages/ExplorePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import MyPostedEventsPage from "./pages/MyPostedEventsPage";
import EditInterestsPage from "./pages/EditInterestsPage"; // <-- NEW IMPORT

export default function App() {
  return (
    <Routes>
      {/* --- Public Route --- */}
      <Route path="/" element={<SignupPage />} />

      {/* --- Protected Routes (All roles see these) --- */}
      <Route element={<Layout />}>
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/feed" element={<EventFeedPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/my-events" element={<MyEventsPage />} />
        <Route path="/dashboard" element={<OrganizerDashboard />} />
        <Route path="/my-posted-events" element={<MyPostedEventsPage />} />
        <Route path="/edit-interests" element={<EditInterestsPage />} />{" "}
        {/* <-- NEW ROUTE */}
      </Route>
    </Routes>
  );
}
