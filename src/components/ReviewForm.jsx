// ReviewForm.js
import React, { useState } from "react";
import "../styles/review.css";
import StarRatingForm from "../components/Starrat";
// import { AiOutlineClose } from "react-icons/fa";

const ReviewForm = ({ name, onClose }) => {
  // const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // You can handle form submission logic here
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    // onClose();
  };

  return (
    <div className="review-form">
      <div className="form-header bg-black text-white">
        <h2 className="heading text-white-bold">Course Feedback Form</h2>
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
      <div className="form-body">
        <div className="childrev">
          <span>Regularity and Punctuality
             <h6>The faculty is regular and punctual.</h6></span>
            <StarRatingForm/>
        </div>
        <div className="childrev">
          <span>Effective communication 
          <h6>The faculty communicates with the students effectively.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Syllabus coverage
          <h6>The faculty declared the course plan at the beginning and executed it as planned and completed the syllabus to the satisfaction of the students.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Interest generation and Innovative Practices
          <h6>The faculty generated the interest in the course, practiced innovative methods for teaching learning and evaluation.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Experiential learning
          <h6>The faculty encouraged participative learning and curiosity among the learners. The faculty encouraged asking the questions.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Empathy
          <h6>The faculty is sensitive to student’s problems, aware of class bandwidth and takes care of bright, weaker students appropriately.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Resourceful
          <h6>The Faculty triggered thinking, self-learning and directed good literature, books, and videos for learning beyond classroom.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Domain Expertise
          <h6>The faculty possessed a sound technical knowledge and aware of real life applications.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Collaboration
          <h6>Teacher encouraged co-teaching from industry, arranged experts talks and motivated few students to give presentations.</h6></span>
          <StarRatingForm />
        </div>
        <div className="childrev">
        <span>Evaluation and Assessment
          <h6>question papers, assignments, set by the teachers encouraged in-depth learning, self-learning and triggered thinking.</h6></span>
          <StarRatingForm />
        </div>
        <div className="txtarea">
          <span>Comment</span>
          <textarea
            rows="4"
            cols="50"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>
      <div className="form-footer">
        <button onClick={handleSubmit} class="button-48" role="button">
          <span class="text">Submit</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;

// import React from "react";

// const ReviewForm = () => {
//   return <div>ReviewForm</div>;
// };

// export default ReviewForm;
