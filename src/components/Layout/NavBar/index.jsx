const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">
            <span>
              <img src="./logo.png" alt="" width="100" />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="ul-1 navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  {" "}
                  ACCEUIL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#book">
                  BOOTCAMP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#packages">
                  RESERVATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  CONTACT
                </a>
              </li>
            </ul>

            <button type="button" className="btn btn-danger">
              JE MABONNE
            </button>
            <span className="user">
              <a href="">
                <img src="./user.png" width="30" alt="" />
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};
