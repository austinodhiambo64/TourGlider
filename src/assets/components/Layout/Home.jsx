import React from "react";

function Home() {
  return (
    <div>
      <div className="container h-100 d-inline-block mt-30 text-center w-100">
        <div className=" row align-items-start">
          <div className="bg-success h-100 d-inline-block p-10 text-dark bg-opacity-10 col d-flex justify-content-center align-items-center">
            <img
              src="images/astro2.png"
              className="img-fluid w-100"
              alt="astro"
            />
          </div>
          <div className="col">
            <h1 className="rounded-pill bg-danger text-white p-3">
              Travel & Travail
            </h1>
            <p className=" container bg-success p-2 text-dark bg-opacity-50 text-justify font-weight-bold mt-4">
              "Travel the world while you still can, because let's face it,
              we're all dying anyway - might as well make it an adventure!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
