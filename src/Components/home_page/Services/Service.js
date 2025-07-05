function Service() {
  return (
    <div className="text-center my-5" id="services">
      <h1 className="mt-5">Our Services</h1>
      <p className="mb-5">
        We offer a wide range of dental services to meet your needs.
      </p>
      <div className="d-flex justify-content-evenly flex-column flex-md-row gap-3 mx-3 ">
        <div className="card bg-dark text-white py-4 w-100 w-md-25 w-lg-0">
          <img
            src="/images/download.png"
            className="card-img-top  w-25 align-self-center"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Fluoride Treatment</h5>
            <p className="card-text">
              Fluoride treatment is a quick and painless way to help protect
              your teeth from cavities. It strengthens the enamel <br />
              Think of it as a vitamin boost for your teeth — safe, simple, and
              effective.
            </p>
          </div>
        </div>
        <div className="card bg-dark text-white py-4 w-100 w-md-25 w-lg-0">
          <img
            src="/images/download (1).png"
            className="card-img-top  w-25 align-self-center"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Cavity Filling</h5>
            <p className="card-text">
              Cavity filling is a common dental procedure used to restore the
              function and integrity of a tooth that has been damaged by decay.
            </p>
          </div>
        </div>
        <div className="card bg-dark text-white py-4 w-100 w-md-25 w-lg-0">
          <img
            src="/images/download (2).png"
            className="card-img-top  w-25 align-self-center"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Teeth Whitening</h5>
            <p className="card-text">
              Teeth whitening is a cosmetic dental procedure aimed at lightening
              the color of your teeth. It can be done in-office or at home,
              using various products and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
