import React from "react";

function Signup() {
  return (
    <div className="container text-center">
      <div className="row align-items-center bg-success p-2 text-white bg-opacity-75">
        <div className="col">
          <div className="card" style={{ width: '28rem' }}>
            <img src="/images/pg2.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
              Lost in a foreign land, I asked for directions, but the locals replied in gibberish. Turns out, I accidentally stumbled into a town of mime artists. Communication took an unexpected twist, and I became the unintentional star of their silent comedy show. With exaggerated gestures and a mighty "mime sword," I valiantly battled imaginary villains, leaving the audience in stitches and the mimes in awe of my nonsensical bravery.
              </p>
            </div>
          </div>
        </div>
        <div className="col cantainer-fluid">
          <div>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option defaultValue>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
