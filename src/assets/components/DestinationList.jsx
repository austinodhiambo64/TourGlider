import React from "react";
import { Link } from "react-router-dom";
import Header from "./Layout/Header";


function DestinationList() {
  return (
    <div>
      <Header/>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="./images/Pasted image 1.jpg" // Make sure the image path is correct
          className="card-img-top"
          alt="giraffe"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to describe selected destination on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/details" className="btn btn-primary">
            Let's See
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationList;
