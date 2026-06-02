import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm " style={{ backgroundColor: "orange" }}>
      <div className="container">
        <Link className="navbar-brand" to="/" id="navbar-logo">
          👑 Diner King
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">
              About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login">
                <button
                  id="sign-up"
                  type="button"
                  className="btn btn-danger btn-lg"
                >
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;