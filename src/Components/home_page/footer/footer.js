function Footer({ footer }) {
  return (
    <footer
      style={{ backgroundColor: "#e0f7f4" }}
      className="text-dark pt-4 pb-3 mt-5 border-top"
    >
      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Tooth Desk</h5>
            <p>
              Designed to support dental professionals with effortless
              appointment tracking, patient care coordination, and smoother
              clinic operations.
            </p>
          </div>
          {footer}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Get in Touch</h6>
            <p className="mb-1">
              <i className="bi bi-envelope me-2"></i>Vk@toothdesk.com
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone me-2"></i>+91 9347xxxxxx
            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i>Eluru, Andhra Pradesh
            </p>
          </div>
        </div>

        <div className="text-center border-top ">
          <small>
            &copy; {new Date().getFullYear()} Tooth Desk — Built for better
            dental care.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
