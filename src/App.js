import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Msdprojects from "./components/Msdprojects";
import Dipprojects from "./components/Dipprojects";
import Dmtprojects from "./components/Dmtprojects";
import FeedbackForm from "./components/FeedbackForm";
import React, { useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbacks((prev) => [...prev, feedback]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home feedbacks={feedbacks} />}
        />
        <Route path="/Msdprojects" element={<Msdprojects />} />
        <Route path="/Dipprojects" element={<Dipprojects />} />
        <Route path="/Dmtprojects" element={<Dmtprojects />} />
        <Route
          path="/Feedback"
          element={<FeedbackForm addFeedback={addFeedback} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
