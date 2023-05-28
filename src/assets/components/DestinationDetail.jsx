import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist";

function DestinationDetail() {
  const [showAlert, setShowAlert] = useState(false);

  const addToWishlist = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      window.location.href = "/wishlist";
    }, 3000);
  };

  return (
    <div className="container">
      {showAlert && (
        <div
          className="alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3"
          role="alert"
        >
          Added to Wishlist! <span className="bi bi-check-circle-fill"></span>
        </div>
      )}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/Pasted image.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Feed them</h5>
              <p>
                Experience Luxury and Adventure at Giraffe Hotel: Indulge in
                elegance and thrill at Giraffe Hotel, where giraffes roam freely
                and luxury awaits. Feed these graceful creatures and enjoy
                impeccable service in a breathtaking setting.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Pasted image 1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pet them</h5>
              <p>
                Tropical Paradise at Giraffe Hotel: Escape to a unique oasis
                where giraffes roam and beauty surrounds you. Relax in luxurious
                rooms, hand-feed gentle giraffes, and create unforgettable
                memories amidst stunning landscapes.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Pasted image 2.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Look up to them</h5>
              <p>
                Serene Tranquility at Giraffe Hotel: Surrender to serenity at
                Giraffe Hotel, where nature and comfort harmonize. Encounter
                friendly giraffes, enjoy modern elegance, and find peace in
                breathtaking views.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/wishlist"
            className="btn btn-primary"
            onClick={addToWishlist}
          >
            Add to Wishlist
          </Link>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default DestinationDetail;
