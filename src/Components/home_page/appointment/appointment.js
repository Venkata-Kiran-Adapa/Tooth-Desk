const Appointment = () => {
  return (
    <>
      <h2 className="text-center fs-1 " id="appointments">Appointment</h2>
      <p className="text-center">Your smile is just one click away</p>
      <div className="d-flex justify-content-evenly mx-2 p-2 m-lg-4 mt-lg-5 p-lg-4 align-items-center">
      
        <div className="position-sticky top-0 align-self-start d-flex mt-5 flex-column ">
          <h4 className="text-center fw-medium">Book an Appointment</h4>
          <p className="fst-italic fs-5 text-center">
            Taking care of your smile has never been easier.
            <br />
            Just pick a date and time that works for you — we’ll handle the
            rest.
            <br />
            Whether it’s a routine cleaning, a little toothache, or something
            you’ve been putting off, we’re here to help.<br></br>
            No stress. No judgment. Just friendly dental care that puts you
            first.
          </p>
          <button className="btn btn-primary fs-5 align-self-center" onClick={() => alert("Login to book an Appointment..! :)")}>
            Book Now
          </button>
        </div>

        <div className=" d-none d-md-flex flex-column align-items-center gap-4 ">
        <img
          src="/images/doctor.jpg"
          alt="Doctor"
          style={{ width: "60%", height: "auto" }}
        />
         <img
          src="/images/doctor1.webp"
          alt="Doctor"
          style={{ width: "60%", height: "auto" }}
        />
         <img
          src="/images/doctor2.png"
          alt="Doctor"
          style={{ width: "60%", height: "auto" }}
        />
      </div>
      </div>
    </>
  );
};
export default Appointment;  