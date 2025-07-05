function Header({ onLoginbtn, Logbtn, isLoggedIn, onLogout, children }) {
  return (
    <nav className="navbar navbar-expand-md bg-warning fst-italic m-3 ">
      <div className="container-fluid">
        <a className="navbar-brand h3 fs-2" href="/">
          Tooth Desk
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          {children}

          <button
            className="btn btn-outline-light ms-3 text-dark"
            onClick={isLoggedIn ? onLogout : onLoginbtn}
          >
            <i className="bi bi-person-fill"></i>
            {isLoggedIn ? " Logout" : " Login"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
