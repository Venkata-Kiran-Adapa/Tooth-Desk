function Main() {
  return (
    <main>
      <div className="d-flex m-4 h-100 justify-content-center align-items-center flex-row">
        <div className="d-flex flex-column w-100 ">
          <div>
            <p className="display-4">
              A smile is the universal language of kindness — let’s protect it
              with compassion and care.
            </p>
          </div>
          <div className=" mt-5 d-flex flex-column flex-md-row justify-content-around align-items-center fst-italic ">
            <div className="shadow p-2 p-lg-0">
              <p className="text-center   h5"> Best Dentistry</p>
              <p className="text-center   h6"> 2025 </p>
            </div>
            <div className="shadow p-2 p-lg-0">
              <p className="text-center   h5"> Working Hours</p>
              <p className="text-center   h6">

                Monday - Friday: 9:00 AM - 5:00 PM
              </p>
              <p className="text-center   h6"> Saturday: 10:00 AM - 2:00 PM</p>
            </div>
            <div className="shadow p-2 p-lg-0">
              <p className="text-center   h5"> Eluru,AP</p>
              <p className="text-center   h6">16.7107° N, 81.0952° E</p>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel d-none d-md-block slide w-50  carousel-fade "
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/photo-1489278353717-f64c6ee8a4d2.jpeg"
                width={500}
                height={500}
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/1000_F_1398471540_VVOaSvxwdwR2jXQL6R11G6Rx3kNbZeoK.jpg"
                width={500}
                height={500}
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/240_F_1125856145_4UdocQkXWiHK0EclSPXmDs6DskTuumo8.jpg"
                width={500}
                height={500}
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/teeth.webp"
                width={500}
                height={500}
                className="d-block w-100"
                alt="Slide 4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
