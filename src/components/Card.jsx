import React, { useEffect, useState } from "react";
import "../styles/product.css";
import { FaStar } from "react-icons/fa";
import ReviewForm from "./ReviewForm";
import StarRatingForm from "./Starrat";
import axios from "axios";
import { API_URL } from "../config";

export function Card(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedbackClick = () => {
    openModal();
  };

  return (
    <div className="productList">
      <div key={props.id} className="productCard">
        <div className="prodimg">
          <img src={props.image} alt="product-img" className="imgs"></img>
        </div>

        <div className="productCard__content">
          <div className="heading">
            <span className="productName">{props.name}</span>
          </div>

          <div className="productRating">
            <div className="stars">
              {[...Array(props.rating)].map((index) => (
                <FaStar className="fastar" id={index + 1} key={index} />
              ))}
            </div>

            <button
              className="button-3"
              role="button"
              onClick={handleFeedbackClick}
            >
              Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div>
        <div className="productModalContent">
          {isModalOpen && <ReviewForm name={props.name} onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}
