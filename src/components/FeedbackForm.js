import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackForm.css";

function FeedbackForm({ addFeedback }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    organization: "",
    feedback: "",
    rating: "",
   
    
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (formData.name && formData.feedback && formData.rating && formData.role && formData.organization) {
      addFeedback(formData); // Pass the entire object
      navigate("/"); // Redirect after form submission
    } else {
      alert("Please fill out all the fields.");
    }
  };

  return (
    <div id="feedbackCom">
      <div id="feedback-form">
        <h1>Leave Your Feedback</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="role"
            placeholder="Enter your role"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="organization"
            placeholder="Enter your Organization/Company Name"
            value={formData.organization}
            onChange={handleChange}
            required
          />
          <br />
          <textarea
            name="feedback"
            placeholder="Enter your feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="number"
            name="rating"
            placeholder="Rate my work (1-5)"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
