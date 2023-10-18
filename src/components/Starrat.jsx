import React, { useState } from "react";
import "../styles/Starrat.css";
import { FaStar } from "react-icons/fa";
const StarRatingForm = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue) => {
    let starClass = "";

    if (starValue <= 1.5) {
      starClass = "red-star";
    } else if (starValue === 2.0) {
      starClass = "yellow-star";
    } else {
      starClass = "green-star";
    }

    // Set the rating and star class when a star is clicked
    setRating({ value: starValue, class: starClass });
  };

  return (
    <div className="star-rating-form">
      <div className="stars text-right">
        {[1.0, 1.5, 2.0, 2.5, 3.0].map((starValue) => (
          <span key={starValue} className={`star ${starValue <= rating.value ? rating.class : ""}`} onClick={() => handleStarClick(starValue)}>
            <h6 className="font-bold text-black "> {starValue.toFixed(1)}</h6>
            <FaStar/>
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRatingForm;
