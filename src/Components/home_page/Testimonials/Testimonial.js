function Testimonials() {
  return (
    <div className="container my-5" id="patients">
      <h2 className="text-center mb-4">What Our Patients Say</h2>

      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel"   data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <div className="card w-75 shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "Booking was super easy, and I got reminder messages before my visit. It really helped me stay on track."
                  </p>
                  <h6 className="card-title mt-3 mb-0">— Shanmukh K.</h6>
                  <small className="text-muted">Patient from Vijayawada</small>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card w-75 shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "I used to forget my appointments, but not anymore. Everything feels so smooth and organized now!"
                  </p>
                  <h6 className="card-title mt-3 mb-0">— Akash G.</h6>
                  <small className="text-muted">Patient from Eluru</small>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card w-75 shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "I was in and out in no time. The check-in was quick and the staff knew exactly when to expect me. Loved it!"
                  </p>
                  <h6 className="card-title mt-3 mb-0">— Nithin Kumar S.</h6>
                  <small className="text-muted">Patient from Hyderabad</small>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <div className="card w-75 shadow-sm border-0">
                <div className="card-body">
                  <p className="card-text">
                    "Everything was so smooth — from booking online to sitting in the chair. It made my visit feel relaxed and easy."
                  </p>
                  <h6 className="card-title mt-3 mb-0">— Prasanth P.</h6>
                  <small className="text-muted">Patient from Chennai</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev " type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
